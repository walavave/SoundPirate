SoundPirate Chrome Extension
============

Chinese version: [README_zh.md](README_zh.md)

This repository is a maintained fork of the original SoundPirate project by Seeker Lee.

This fork is focused on:
- adapting the extension to current Chrome extension requirements
- keeping the project loadable in modern Chrome
- removing dead or obsolete site integrations that no longer work

There is currently no Chrome Web Store version for this fork. Use the unpacked extension from the local `build/` directory.

### "Grabbing Your Favourite Sound Like a Pirate!"

1. Build the extension locally.
2. Open `chrome://extensions/`.
3. Enable `Developer mode`.
4. Click `Load unpacked` and select the `build/` directory.
5. Open a supported site and play audio.
6. When the floating download icon appears in the lower corner, SoundPirate has captured a playable audio URL.

### Wanna put any comments or feedback?
Email: `walavave@gmail.com`

Issues: <https://github.com/walavave/SoundPirate/issues>

### Note
This fork only keeps site integrations that still exist in the current codebase.

Explicit site adapters currently included:
- [QQ Music](https://y.qq.com/)
- [NetEase Music](https://music.163.com/)
- [Kuwo](https://kuwo.cn)
- [Kugou](https://kugou.com)
- [Migu music](https://music.migu.cn/)
- [Musicbed](https://musicbed.com/)
- [Taihe](https://play.taihe.com/)

There is also a generic direct-audio capture path for pages that still expose plain `.mp3`, `.m4a`, `.aac`, or `.ogg` URLs.

How to develop or build your own SoundPirate
============
0. make sure you have Node.js installed
1. clone this repo, and cd inside: `git clone git@github.com:walavave/SoundPirate.git`; `cd SoundPirate`
2. run `npm install`
3. to develop: `npm run start`
4. to build: `npm run build`
5. open `chrome://extensions/` in Chrome
6. turn on `Developer mode`
7. click `Load unpacked` and select the `build/` folder
8. listen and test

src/js/service/qq.js is a good example to start.

TODO:
1. support m3u8 if possible
2. add options
