class EventObserver {
    constructor() {
        this.boardRefreshEvent = null;
        this.navBarRefreshEvent = null;
    }

    // Section related to BoardsListView.vue and NewBoardView.vue(relation event owner <- event caller)

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

    // Section related to NavBar.vue

    assingNavBarRefresh(func) {
        this.navBarRefreshEvent = func
    }

    clearNavBarRefresh() {
        this.navBarRefreshEvent = null
    }

    callNavBarRefresh() {
        if(this.navBarRefreshEvent != null) {
            this.navBarRefreshEvent();
        }
    }

}

let Events = new EventObserver();

export { Events }