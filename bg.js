
class Proxy {
	constructor() {
		this.rules = [];
	}
	buildRule(item, isFirst){
		return `${!isFirst?`else `:``}if(${item.exp}){ return "${this.resolveHost[(item.srv)]}"; }`;
	}
	addRule(exp, srv = 'reserved_nl2') {
		this.rules.push({exp, srv});
		return this;
	}
	resolveTo(host) {
		this.resolveHost = host;
		return this;
	}
	buildPacScript(cb) {
		const s = [`function FindProxyForURL(url, host){`];
		const self = this;
		this.rules.forEach(
			(item, id) => s.push(self.buildRule(item, id===0))
		);
		s.push(' else { return "DIRECT"; } }');
		return cb(s.join(' '));
	}
}

var proxyStart = new Proxy()

.addRule('shExpMatch(url, "vk.*")')
.addRule('shExpMatch(url, "vk.*")')
.addRule('shExpMatch(url, "*.vk.*")')
.addRule('shExpMatch(url, "vk-cdn.*")')
.addRule('shExpMatch(url, "*.vk-cdn.*")')
.addRule('shExpMatch(url, "vkuservideo.*")')
.addRule('shExpMatch(url, "*.vkuservideo.*")')
.addRule('shExpMatch(url, "*.vkuseraudio.*")')
.addRule('shExpMatch(url, "vkuseraudio.*")')
.addRule('shExpMatch(url, "vkuserlive.*")')
.addRule('shExpMatch(url, "*.vkuserlive.*")')
.addRule('shExpMatch(url, "userapi.com")')
.addRule('shExpMatch(url, "apivk.com")')
.addRule('shExpMatch(url, "yandex.*")')
.addRule('shExpMatch(url, "*.yandex.*")')
.addRule('shExpMatch(url, "ya.ru")')
.addRule('shExpMatch(url, "*.ya.ru")')
.addRule('shExpMatch(url, "ya.cc")')
.addRule('shExpMatch(url, "*.ya.cc")')
.addRule('shExpMatch(url, "bk.ru")')
.addRule('shExpMatch(url, "*.bk.ru")')
.addRule('shExpMatch(url, "yandex-launcher.com")')
.addRule('shExpMatch(url, "yandexdatafactory.ru")')
.addRule('shExpMatch(url, "yandexlauncher.com")')
.addRule('shExpMatch(url, "yandexlyceum.ru")')
.addRule('shExpMatch(url, "yandextrafik.com.tr")')
.addRule('shExpMatch(url, "yandex-school.ru")')
.addRule('shExpMatch(url, "yandexdatafactory.com")')
.addRule('shExpMatch(url, "yandexdataschool.*")')
.addRule('shExpMatch(url, "yandex-ad.cn")')
.addRule('shExpMatch(url, "yandexadexchange.net")')
.addRule('shExpMatch(url, "yaani.ru")')
.addRule('shExpMatch(url, "yandex-amp.net")')
.addRule('shExpMatch(url, "*.yandex-amp.net")')
.addRule('shExpMatch(url, "*.yandex-launcher.com")')
.addRule('shExpMatch(url, "*.yandexdatafactory.ru")')
.addRule('shExpMatch(url, "*.yandexlauncher.com")')
.addRule('shExpMatch(url, "*.yandexlyceum.ru")')
.addRule('shExpMatch(url, "*.yandextrafik.com.tr")')
.addRule('shExpMatch(url, "*.yandex-school.ru")')
.addRule('shExpMatch(url, "*.yandexdatafactory.com")')
.addRule('shExpMatch(url, "*.yandexdataschool.*")')
.addRule('shExpMatch(url, "*.yandex-ad.cn")')
.addRule('shExpMatch(url, "*.yandexadexchange.net")')
.addRule('shExpMatch(url, "webvisor.*")')
.addRule('shExpMatch(url, "*.webvisor.*")')
.addRule('shExpMatch(url, "avto.ru")')
.addRule('shExpMatch(url, "auto.ru")')
.addRule('shExpMatch(url, "autoru.tv")')
.addRule('shExpMatch(url, "ok.com")')
.addRule('shExpMatch(url, "ok.ru")')
.addRule('shExpMatch(url, "ok.me")')
.addRule('shExpMatch(url, "*.ok.ru")')
.addRule('shExpMatch(url, "*.ok.me")')
.addRule('shExpMatch(url, "*.ok.com")')
.addRule('shExpMatch(url, "odnoklassniki.*")')
.addRule('shExpMatch(url, "*.odnoklassniki.*")')
.addRule('shExpMatch(url, "mail.ua")')
.addRule('shExpMatch(url, "*.mail.ua")')
.addRule('shExpMatch(url, "appsmail.ru")')
.addRule('shExpMatch(url, "attachmail.ru")')
.addRule('shExpMatch(url, "datacloudmail.ru")')
.addRule('shExpMatch(url, "distribmail.ru")')
.addRule('shExpMatch(url, "owamail.ru")')
.addRule('shExpMatch(url, "portal.mail.ru")')
.addRule('shExpMatch(url, "*.mail.ru")')
.addRule('shExpMatch(url, "imgsmail.ru")')
.addRule('shExpMatch(url, "*.imgsmail.ru")')
.addRule('shExpMatch(url, "mail.ru")')
.addRule('shExpMatch(url, "cldmail.ru")')
.addRule('shExpMatch(url, "cdnmail.ru")')
.addRule('shExpMatch(url, "*.appsmail.ru")')
.addRule('shExpMatch(url, "*.attachmail.ru")')
.addRule('shExpMatch(url, "*.datacloudmail.ru")')
.addRule('shExpMatch(url, "*.distribmail.ru")')
.addRule('shExpMatch(url, "*.owamail.ru")')
.addRule('shExpMatch(url, "*.portal.mail.ru")')
.addRule('shExpMatch(url, "*.cldmail.ru")')
.addRule('shExpMatch(url, "*.cdnmail.ru")')
.addRule('shExpMatch(url, "kinopoisk.ru")')
.addRule('shExpMatch(url, "*.kinopoisk.ru")')
.addRule('shExpMatch(url, "yandex.*")')
.addRule('shExpMatch(url, "*.yandex.*")')
.addRule('shExpMatch(url, "*.yandex")')
.addRule('shExpMatch(url, "vk.*")')
.addRule('shExpMatch(url, "*.vk.*")')
.addRule('shExpMatch(url, "kaspersky.*")')
.addRule('shExpMatch(url, "*vk.com*")')
.addRule('shExpMatch(url, "*vk.ru*")')
.addRule('shExpMatch(url, "*vkontakte.ru*")')
.addRule('shExpMatch(url, "*vkontakte.com*")')
.addRule('shExpMatch(url, "*apivk.com*")')
.addRule('shExpMatch(url, "*userapi.com*")')
.addRule('shExpMatch(url, "*vk-cdn.net*")')
.addRule('shExpMatch(url, "*vk-cdn.me*")')
.addRule('shExpMatch(url, "*vk.cc*")')
.addRule('shExpMatch(url, "*vkforms.ru*")')
.addRule('shExpMatch(url, "*drweb.ua*")')
.addRule('shExpMatch(url, "*drweb.ru*")')
.addRule('shExpMatch(url, "*ok.com*")')
.addRule('shExpMatch(url, "*odnoklassniki.com.ua*")')
.addRule('shExpMatch(url, "*odnoklassniki.ru*")')
.addRule('shExpMatch(url, "*mycdn.me*")')
.addRule('shExpMatch(url, "*odnoklassniki.ua*")')
.addRule('shExpMatch(url, "*ok.ru*")')
.addRule('shExpMatch(url, "*ok.me*")')
.addRule('shExpMatch(url, "*music.yandex.ua*")')
.addRule('shExpMatch(url, "*music.yandex.ru*")')
.addRule('shExpMatch(url, "*yandex.st*")')
.addRule('shExpMatch(url, "*yastatic.net*")')
.addRule('shExpMatch(url, "*portal.mail.ru*")', 'reserved_nl1')
.addRule('shExpMatch(url, "*ad.mail.ru*")', 'reserved_nl1')
.addRule('shExpMatch(url, "*mail.ru*")', 'reserved_nl1')
.addRule('shExpMatch(url, "*ya.ru*")', 'reserved_nl1')
.addRule('shExpMatch(url, "*kinopoisk.ru*")', 'reserved_nl1')
.addRule('shExpMatch(url, "*drweb.com*")', 'reserved_nl1')
.addRule('shExpMatch(url, "*kaspersky.ua*")', 'reserved_nl1')
.addRule('shExpMatch(url, "*yastatic.net*")', 'reserved_nl1')
.addRule('shExpMatch(url, "*yandex.ru*")', 'reserved_nl1')
.addRule('shExpMatch(url, "*yandex.net*")', 'reserved_nl1')
.addRule('shExpMatch(url, "*yandex.com*")', 'reserved_nl1')
.addRule('shExpMatch(url, "*livejournal.ru*")', 'reserved_nl1')
.addRule('shExpMatch(url, "*yandex.ua*")', 'reserved_nl1')

.resolveTo({
	"reserved_nl1": "PROXY s4.telvanil.ru:1448;PROXY s3.telvanil.ru:1448;",
	"reserved_nl2": "PROXY s1.telvanil.ru:1448;PROXY s2.telvanil.ru:1448;",
	"main": "PROXY s3.telvanil.ru:1448"
}).buildPacScript((data) => {
	chrome.proxy.settings.set({value: {mode: "pac_script", pacScript: {data: data}}, scope:"regular"})
});

chrome.webNavigation.onCompleted.addListener(function(details) {
    if (details.frameId === 0) {
        var tabUrl = details.url;
		chrome.tabs.executeScript(details.tabId, {
			"file": "counter.js",
			allFrames: false
		});
    }
});
