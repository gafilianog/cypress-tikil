const logout = () => {
    cy.get("b:contains('Logout')").click()
}

const navigateToMenu = (menu) => {
    cy.get(`.k-link`).contains(menu).click()
}

const fillKehadiran = (clockOut, clockIn, dateDiff, reason, witness, reviewer1, reviewer2, isSubmit, comment) => {
    clockOut = (clockOut === 'DEFAULT') ? getCurrTime() : clockOut

    cy.get('#JamPulang').type(clockOut)
    cy.get('#Hour').type(clockIn)
    chooseDate(getDate(dateDiff))
    cy.get('[value="Lainnya"]').click()
    cy.get('#Reason').type(reason)
    cy.wait(1000)
    chooseWitness(witness)
    chooseReviewer1(reviewer1)
    chooseReviewer2(reviewer2)
    if (isSubmit) {
        cy.get('#btnSubmit').click()
        cy.get('#CommentText').type(comment)
        // cy.get('#btnSubmit2').click()
        cy.get('#btnCancel2').click()
    }
}

const chooseDate = (date) => {
    cy.get('span[aria-controls="DateFrom_dateview"]').click({force: true})
    cy.get(`[data-value="${date}"]`).click()
}

const chooseWitness = (witness) => {
    cy.get('[aria-owns="WitnessId_listbox"]').click({force: true})
    cy.contains(witness).click()
}

const chooseReviewer1 = (reviewer1) => {
    cy.get('[aria-owns="ReviewerId1_listbox"]').click({force: true})
    cy.get('#ReviewerId1-list').children().contains(reviewer1).click()
}

const chooseReviewer2 = (reviewer2) => {
    cy.get('[aria-owns="ReviewerId2_listbox"]').click({force: true})
    cy.get('#ReviewerId2-list').children().contains(reviewer2).click()
}

const getDate = (dateDiff) => {
    const today = new Date()
    const date = new Date(today.setDate(today.getDate() + dateDiff))

    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    
    return `${year}/${month}/${day}`
}

const getCurrTime = () => {
    const today = new Date()
    const hour = today.getHours()
    const minute = today.getMinutes()

    return `${hour}:${minute}`
}

export {
    logout,
    navigateToMenu,
    fillKehadiran,
}
