// Simple JavaScript code to test RegEx email validation

let emails = [
    "test1@domain.com",
    "TeSt2@domain-name.com",
    "te$t!@domain-name.com",
    "testing.this@domain_name.edu",
    "Better.Name@domain.company"
]

const regex = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'i');

emails.forEach(emails => console.log(emails, regex.test(emails)))
// Test results for the above emails array should return:
//  true, true, false, false, false