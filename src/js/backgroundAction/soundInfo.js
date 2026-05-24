
import { addRuntimeListener, sendRuntimeMsg } from '../browser'
const filenamify = require('filenamify')

const LATEST_SOUND_KEY = 'latestSoundInfo'

function getLatestSoundInfo() {
    return new Promise((resolve) => {
        chrome.storage.local.get([LATEST_SOUND_KEY], (result) => {
            resolve(result[LATEST_SOUND_KEY] || {})
        })
    })
}

function setLatestSoundInfo(patch) {
    return getLatestSoundInfo().then((current) => {
        const next = {
            ...current,
            ...patch
        }
        return new Promise((resolve) => {
            chrome.storage.local.set({
                [LATEST_SOUND_KEY]: next
            }, resolve)
        })
    })
}

function backgroundInit() {
    async function download() {
        const { url, filename } = await getLatestSoundInfo()

        if (!url || !filename) {
            return
        }

        chrome.downloads.download({
            url,
            filename
        })
    }
    addRuntimeListener( msg => {
        if (msg.action === 'download') {
            download()
        } else if (msg.action === 'setName') {
            const filename = filenamify(msg.name)
            setLatestSoundInfo({ filename })
            chrome.action.setTitle({title: `声海盗\n点击下载 ${msg.name}\n`})
        }
    })
    
    chrome.action.onClicked.addListener(() => {
        download()
    })
}

function setLatestSoundURL(url) {
    setLatestSoundInfo({ url })
}

function setLatestSoundName(name) {
    sendRuntimeMsg(null, {
        action: "setName",
        name
    })
}

function downloadLatestSound() {
    sendRuntimeMsg(null, {
        action: "download"
    })
}

export {
    backgroundInit,
    setLatestSoundURL,
    setLatestSoundName,
    downloadLatestSound
}
