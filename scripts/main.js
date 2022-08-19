import { fetchClowns, fetchRequests } from "./dataAccess.js"
import { PartyClown } from "./PartyClown.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchClowns())
        .then(
        () => {
            mainContainer.innerHTML = PartyClown()
        }
    )
}

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()



