import { RequestForm } from "./PartyForm.js"
import { Requests } from "./Requests.js"

export const PartyClown = () => {
    return `
    <center>
    <h1><left><img src="https://64.media.tumblr.com/9601791d57f9e8688fcb1dfc6addb5d1/tumblr_oxmyv9NizN1urtxd7o1_1280.gifv" alt="Logo"style="width: auto; height: auto;max-width: 320px;max-height: 300px"></img></left></h1>
        <article class="header">
        <h1>Buttons & Lollipop The Clown</h1>
        </article>
        <section class="partyForm">
            ${RequestForm()}
        </section>
    </center>
        <section class="partyRequests">
           <center> 
           <article class = "title">
           <h2>Party Requests</h2>
           </article>
           </center>
            ${Requests()}
        </section>
    `
}