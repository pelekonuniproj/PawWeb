// https://play-rest-api-paw.herokuapp.com/
import Vue from 'vue'
import { UserStore } from '../DataHolders/User'

class Api {
    constructor() {
        this.apiHost = 'http://localhost:8080'
    }

    getBoardsForUser(callBack) {
        const endpoint = this.apiHost + "/board";
        const authValue = "Bearer " + UserStore.getToken()
        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        }

        Vue.axios.get(endpoint, headers, {}).then(response => {
            callBack(response.data)
        })
    }

    getCommentsForCard(callBack, cardId) {
        const endpoint = this.apiHost + "/comment/card/" + cardId;
        const authValue = "Bearer " + UserStore.getToken();
        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        };

        Vue.axios.get(endpoint, headers).then(response => {
            callBack(response.data)
        })
    }

    getTasksForCard(callBack, cardId) {
        const endpoint = this.apiHost + "/task/list/" + cardId;
        const authValue = "Bearer " + UserStore.getToken();
        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        };

        Vue.axios.get(endpoint, headers).then(response => {
            callBack(response.data)
        })
    }

    // getBoardsForTeam(teamId, callback) {
    //     var endpoint = this.apiHost + "/board/all/" + teamId;
    //     Vue.axios.get(endpoint).then(response => callback(response.data))
    // }

    getBoardDetails(ownerName, boardName, callback) {
        var endpoint = this.apiHost + "/board/" + ownerName + "/" + boardName
        Vue.axios.get(endpoint).then(response => callback(response.data[0]))
    }

    getCardsForBoardSection(sectionId, callBack) {
        var endpoint = this.apiHost + "/card/all/" + sectionId
        Vue.axios.get(endpoint).then(response => callBack(response.data))
    }

    loginUser(userName, userPass, onSuccess, onFail) {
        var endpoint = this.apiHost + "/login"
        
        Vue.axios.post(endpoint, {
            'login': userName,
            'password': userPass,
        }).then(response => onSuccess(response.data)).catch(onFail())
    }

    registerUser(userName, userPassword, onSuccess, onFail) {
        var endpoint = this.apiHost + "/user";
        Vue.axios.post(endpoint,{
            name: userName,
            surname: "empty",
            login: userName,
            password: userPassword,
            email: "empty@empty.com"
        }).then(response => onSuccess(response.data)).catch(onFail())
    }

    createCard(cardListId, cardTitle, cardDescription, cardLabelId, cardNumberOnList, onSuccess) {
        const endpoint = this.apiHost + "/card"
        const authValue = "Bearer " + UserStore.getToken()

        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        }

        Vue.axios.post(endpoint, {
            title: cardTitle,
            description : cardDescription,
            labelId : cardLabelId,
            numberOnList : cardNumberOnList,
            listId: cardListId,
        }, headers).then(response => onSuccess(response))
    }

    createBoard(boardName, onSuccess) {
        const endpoint = this.apiHost + "/board";
        const authValue = "Bearer " + UserStore.getToken()

        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        }

        Vue.axios.post(endpoint, {
            name: boardName,
            team_id: null,
            background: "",
            isPublic: true
        }, headers).then(response => onSuccess(response))
    }

    updateBoardName(newName, boardId) {
        const endpoint = this.apiHost + "/board/" + boardId;
        const authValue = "Bearer " + UserStore.getToken()

        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        }

        Vue.axios.put(endpoint, {
            name: newName,
            background: "",
            isPublic: true
        }, headers)
    }

    deleteTask(taskId, onSuccess, onFail) {
        const endpoint = this.apiHost + "/task/" + taskId;
        const authValue = "Bearer " + UserStore.getToken();
        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        };

        Vue.axios.delete(endpoint, headers).then(response => onSuccess(response.data)).catch(onFail())
    }

    addTask(taskListId, name, onSuccess, onFail) {
        const endpoint = this.apiHost + "/task";
        const authValue = "Bearer " + UserStore.getToken();
        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        };

        Vue.axios.post(endpoint, {
            "taskListId": taskListId,
            "name": name,
        }, headers).then(response => onSuccess(response.data)).catch(onFail())
    }

    deleteTaskList(taskListId, onSuccess, onFail) {
        const endpoint = this.apiHost + "/task/list/" + taskListId;
        const authValue = "Bearer " + UserStore.getToken();
        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        };

        Vue.axios.delete(endpoint, headers).then(response => onSuccess(response.data)).catch(onFail())
    }

    addNewTaskList(cardId, name, onSuccess, onFail) {
        const endpoint = this.apiHost + "/task/list";
        const authValue = "Bearer " + UserStore.getToken();
        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        };

        Vue.axios.post(endpoint, {
            "cardId": cardId,
            "name": name,
        }, headers).then(response => onSuccess(response.data)).catch(onFail())
    }

    addCommentForCard(destCardId, comment, onSuccess, onFail) {
        var endpoint = this.apiHost + "/comment/" + destCardId;
        const authValue = "Bearer " + UserStore.getToken();

        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        };

        Vue.axios.post(endpoint, {
            userId: UserStore.getUserId(),
            cardId: destCardId,
            content : comment,
        }, headers).then(response => onSuccess(response.data)).catch(onFail())
    }

    updateBoardListOrder(boardId, body) {
        const endpoint = this.apiHost + "/list/order/" + boardId;
        const authValue = "Bearer " + UserStore.getToken()

        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        }

        Vue.axios.put(endpoint, body, headers)
    }

    updateBoardCardOrder(listId, body) {
        const endpoint = this.apiHost + "/card/all/" + listId;
        const authValue = "Bearer " + UserStore.getToken()

        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        }

        Vue.axios.put(endpoint, body, headers)
    }

    getAttachmentsForCard(cardId, callBack) {
        const endpoint = this.apiHost + "/attachment/card/" + cardId;
        const authValue = "Bearer " + UserStore.getToken()

        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        };

        Vue.axios.get(endpoint, headers).then(response => {
            callBack(response.data)
        });

    }

    addAttachmentForCard(cardId, attachName, dataAsBase64, onSuccess) {
        const endpoint = this.apiHost + "/attachment/card/" + cardId;
        const authValue = "Bearer " + UserStore.getToken()

        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        }

        Vue.axios.post(endpoint, {
            attachment: dataAsBase64,
            name: attachName
        }, headers).then(response => onSuccess(response))
    }

    createList(bId, listName, position, onSuccess) {
        const endpoint = this.apiHost + "/list";
        const authValue = "Bearer " + UserStore.getToken()

        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        }

        Vue.axios.post(endpoint, {
            name: listName,
            boardId: bId,
            numberOnBoard: position
        }, headers).then(response => onSuccess(response))
    }

    updateTask(taskId, name, done, onSuccess, onFail) {
        const endpoint = this.apiHost + "/task/" + taskId;
        const authValue = "Bearer " + UserStore.getToken();

        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        };

        Vue.axios.put(endpoint, {
            name: name,
            done: done,
        }, headers).then(response => onSuccess(response.data)).catch(onFail())
    }

    deleteAttachment(attachmentId, onSuccess, onFail) {
        const endpoint = this.apiHost + "/attachment/" + attachmentId;
        const authValue = "Bearer " + UserStore.getToken();
        const headers = {
            headers: {
                'Authorization': authValue,
                'Access-Control-Allow-Origin': '*',
                'useCredentails': true
            }
        };

        Vue.axios.delete(endpoint, headers).then(response => onSuccess(response.data)).catch(onFail())
    }
}

let ApiClient = new Api();

export { ApiClient }