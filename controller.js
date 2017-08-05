$(document).ready(function() {
    switcher: {

    }
    new Vue({
        el: ".app",
        data: {
            comments: false,
            books: true,
            travel: false,
            cmntr: "",
            items: [{
                    content: "hey there i am",
                    img: "https://resizing.flixster.com/Q1E4YaIimFIwa_uJnCmq4GobTVw=/300x300/v1.aDs5NjM0O2o7MTc0MTU7MTIwMDs2MzE7NzAw",
                    name: 'Ashish Sah',
                    n_cmnt: [{ name: "Animesh Singh", cmnt: "I had been nsseted", img: "" }]
                },
                {
                    content: "yes second comment",
                    img: "https://vignette1.wikia.nocookie.net/thedailybugle/images/f/f1/Ultimate_Spider-Man_Adventures_Vol_1_4_Textless.jpg/revision/latest?cb=20150824022502",
                    name: 'baba Ji',
                    n_cmnt: [{ name: "Animesh Singh", cmnt: "I had been nsseted", img: "" }]
                }
            ]
        },
        methods: {
            commented: function() {

                var c = this.cmntr;
                if (c.length != 0) {
                    this.items.push({ content: c, name: "new" })
                    this.cmntr = "";
                }
                if (c.length != 0 && this.comments == true) {
                    this.comments = true;
                } else {
                    this.comments = !this.comments;
                }
            },
            changer: function() {
                if (this.books == true) {
                    this.books = false;
                    this.travel = true;
                } else {
                    this.books = true;
                    this.travel = false;
                }
            }
        }
    });




});