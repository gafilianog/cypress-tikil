const setCredentials = (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
}

const clickBtnLogin = () => {
    cy.get('#SubmitButton').click()
}

const navigateToAbsensiMenu = () => {
    cy.get("img[src='/Content/portal/absensi.png']").click()
}

export {
    setCredentials,
    clickBtnLogin,
    navigateToAbsensiMenu,
}