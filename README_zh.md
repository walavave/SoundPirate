声海盗
============

### 声海盗-下载在线音乐的Chrome插件
这是从 Seeker Lee 原版 SoundPirate fork 出来的维护分支。

这个 fork 主要做了几件事：
- 适配最新的 Chrome 扩展要求
- 让插件可以继续在现代 Chrome 中以开发者模式加载
- 清理一批已经失效或不再维护的旧站点适配

### 使用方法：
1. 安装 Node.js。
2. 克隆仓库并进入目录。
3. 运行 `npm install`。
4. 运行 `npm run build`。
5. 打开 `chrome://extensions/`。
6. 打开“开发者模式”。
7. 选择“加载已解压的扩展程序”，加载 `build/` 目录。
8. 打开支持的网站并播放音频。
9. 左下角或右下角出现下载图标时，说明插件已经捕获到可下载链接。

反馈方式：
- 邮箱：`walavave@gmail.com`
- Issues：<https://github.com/walavave/SoundPirate/issues>

当前代码里保留的站点适配：
- [QQ音乐](https://y.qq.com/)
- [网易云音乐](https://music.163.com/)
- [酷我](https://kuwo.cn)
- [酷狗](https://kugou.com)
- [咪咕音乐](https://music.migu.cn/)
- [Musicbed](https://musicbed.com/)
- [千千音乐](https://play.taihe.com/)
