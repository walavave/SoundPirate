import { addMessageListener } from '../browser'
import { newSound } from '../page/link'
import { setLatestSoundName, downloadLatestSound } from '../backgroundAction/soundInfo'

const NETEASE_HOST = 'music.163.com'

function shouldHandle() {
    return window.location.hostname === NETEASE_HOST
}

function getDocumentCandidates() {
    const docs = [document]
    const iframe = document.querySelector('#g_iframe')

    if (iframe && iframe.contentDocument) {
        docs.unshift(iframe.contentDocument)
    }

    return docs
}

function getSongName() {
    for (const doc of getDocumentCandidates()) {
        const songName = doc.querySelector('.play .name, .m-playbar .head + .words .name, .tit .f-ff2')
        const artistName = doc.querySelector('.play .by, .m-playbar .head + .words .by, .des .s-fc4')

        if (songName && artistName) {
            return `${songName.innerText.trim()} - ${artistName.innerText.trim()}`
        }

        if (songName) {
            return songName.innerText.trim()
        }
    }

    return document.title.replace(/\s*-\s*网易云音乐\s*$/, '').trim() || 'netease-audio'
}

function pageAction() {
    const handle = shouldHandle()
    if (handle) {
        addMessageListener((info) => {
            const name = getSongName()
            setLatestSoundName(name + '.' + info.soundFormat)
            newSound({
                name,
                format: info.soundFormat,
                action: downloadLatestSound
            })
        })
    }
    return handle
}

export {
    pageAction
}
