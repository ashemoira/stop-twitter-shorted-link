document.addEventListener('click', (e) => {
    if (e.target.closest('a') == null) {
        return
    } else if (e.target.closest('a').href.includes('https://twitter.com/')) {
        return
    }

    e.preventDefault()
    let confirmText = "画像のリンク先に移動しますか？" + "\r\n" + e.target.closest('a').ariaLabel + "\r\n" + "URL: " + e.target.closest('a').href
    if (window.confirm(confirmText)) {
        location.href = e.target.closest('a').href
    }
}, false);