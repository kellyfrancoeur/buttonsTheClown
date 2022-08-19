import { deleteRequest, getRequests, getClowns, saveCompletion } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()
    const clowns = getClowns()
    const convertRequest = (request) => {
        return `<li>
        <article class = "requestInfo">
        ${request.parentName} has requested a party for child, ${request.childName}, on ${request.dateOfRes}.
        The party will host ${request.kidsAttending} children, for ${request.lengthOfRes} hours, at ${request.address}.
        
        <div id="buttonLocation">
        <button class="request__delete"
                id="request--${request.id}">
            Deny
        </button>
        <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${
        clowns.map(
            clown => {
                return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
            }
        ).join("")
    }
    </div>
    </article>
</select>
        </li>`
    }
    let html = `
        <ul>
            ${
                requests.map(convertRequest).join("")
            }
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

            const completion = {
                requestId: parseInt(requestId),
                clownId: parseInt(clownId),
                date_created: Date.now()
             }
             saveCompletion(completion)

        }
    }
)