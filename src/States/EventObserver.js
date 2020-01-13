class EventObserver {
    constructor() {
        this.boardRefreshEvent = null;
    }

    assignBoardRefresh(func) {
        this.boardRefreshEvent = func
    }

    clearBoardRefresh() {
        this.boardRefreshEvent = null
    }

    callBoardRefresh() {
        if (this.boardRefreshEvent != null) {
            this.boardRefreshEvent();
        }
    }
}

let Events = new EventObserver();

export { Events }