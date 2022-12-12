// sessionStorage監聽
export const dispatchEventStorage = () => {
    const signSetItem = sessionStorage.setItem
    sessionStorage.setItem = function(key, val) {
        let setEvent = new Event('setItemEvent')
        setEvent.key = key
        setEvent.newValue = val
        window.dispatchEvent(setEvent)
        signSetItem.apply(this, arguments)
    }
}