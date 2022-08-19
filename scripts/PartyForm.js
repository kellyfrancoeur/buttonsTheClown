import { sendRequest } from "./dataAccess.js"

export const RequestForm = () => {
    let html = `
        <div class="field">
            <label class="label1" for="requestParentName">Parent Name</label>
            <input type="text" name="requestParentName" class="input" />
        </div>
        <div class="field">
            <label class="label2" for="requestChildName">Child Name</label>
            <input type="text" name="requestChildName" class="input" />
        </div>
        <div class="field">
            <label class="label3" for="requestKidsAttending">How Many Children Attending</label>
            <input type="number" name="requestKidsAttending" class="input" />
        </div>
        <div class="field">
            <label class="label4" for="requestAddress">Address</label>
            <input type="text" name="requestAddress" class="input" />
        </div>
        <div class="field">
            <label class="label5" for="requestDate">Date of Reservation</label>
            <input type="date" name="requestDate" class="input" />
        </div>
        <div class="field">
            <label class="label6" for="requestLengthOfRes">Length of Reservation</label>
            <input type="number" name="requestLengthOfRes" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {

        const userParentName = document.querySelector("input[name='requestParentName']").value
        const userChildName = document.querySelector("input[name='requestChildName']").value
        const userKidsAttending = document.querySelector("input[name='requestKidsAttending']").value
        const userAddress = document.querySelector("input[name='requestAddress']").value
        const userDate = document.querySelector("input[name='requestDate']").value
        const userLengthOfRes = document.querySelector("input[name='requestLengthOfRes']").value


        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            kidsAttending: userKidsAttending,
            address: userAddress,
            dateOfRes: userDate,
            lengthOfRes: userLengthOfRes,
        }
        sendRequest(dataToSendToAPI)
    }
})