//https://github.com/eosterberg/terminaljs

$('#div__terminal').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what + '. Wellcome to this terminal.');
    },
    help: function(){
        this.echo("name: It will print Dev's Name");
        this.echo("info: It will print Dev's Info");
        this.echo("clear: To clear the screen");
        this.echo("sum: Takes two arguments and prints the summation");
        this.echo("diff: Takes two arguments and prints the difference");
        this.echo("mul: Takes two arguments and prints the product");
        this.echo("div: Takes two arguments and prints the dividend");
        this.echo("mod: Takes two arguments and prints the remainder");
    },
    name: function(){
        this.echo("Dev's Full Name is: Pratik Kumar Panda.");
    },
    info: function(){
        this.echo(`Dev's Full Name is: Pratik Kumar Panda.\nHe is from Kolkata and currently working in Firstsource.
        \nHe majors in Computer Science and is an aspiring fullstack developer.`);
    },
    sum: function(num1, num2){
        let sum = num1 + num2;
        this.echo("Summation of " + num1 + " and " + num2 + " is: " + sum);
    },
    diff: function(num1, num2){
        let diff = num1 - num2;
        this.echo("Difference between " + num1 + " and " + num2 + " is: " + diff);
    },
    mul: function(num1, num2){
        let prod = num1 * num2;
        this.echo("Product of " + num1 + " and " + num2 + " is: " + prod);
    },
    div: function(num1, num2){
        let div = num1 / num2;
        this.echo("Dividing" + num1 + " by " + num2 + " gives: " + div);
    },
    mod: function(num1, num2){
        let mod = num1 % num2;
        this.echo("Modulus of " + num1 + " and " + num2 + " is: " + mod);
    },
    test: function(){
        this.echo("sada");
        let vs = prompt("wadasas");
        this.echo("Hello "+vs);
    },
}, {
    greetings: 'Hello!! use help command to get started.'
});

// let t1 = new Terminal('terminal-1');
// t1.setHeight("400px");
// t1.print('This is sample with some additional logic:')
//     .print(`Are you ready? Let's go!`)
//     .input(`Hi! What's your name?`, function (name) {
//         t1.print(`Welcome, ${name}!`)
//             .sleep(1000, function () {
//                 t1.print(`We have more questions to follow.`)
//                     .input(`Enter your email, please:`, function (email) {
//                         t1.password('Enter password:', function (password) {
//                             t1.print(`Your name is "${name}" and your email is "${email}" and you have entered password "${password}".`)
//                                 .confirm(`Is it true?`, function (didConfirm) {
//                                     t1.print(didConfirm ? 'You confirmed!' : 'You declined!')
//                                 });
//                         });
                        
//                     });
//         });
// });