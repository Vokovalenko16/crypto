const cobinhood = require('node-cobinhood-api');

cobinhood.options({
    'apiKey': '',
    'verbose': true
});

// function ethereum() {

//     cobinhood.lastPrice("ETH-USDT", (error, lastPrice) => {
//         console.log("hello")
//         if (!error) {
//             console.log("ETH-USDT last price:", lastPrice);
        
//         let price1 = 145.8
//         let price2 = 146.3
       
//         let quantity = 1*(Math.random()*2)
      
         
//         function Sellit() {
//             cobinhood.limitSell("ETH-USDT", price2, quantity, (error, order) => {
//             if (!error) {
//                 console.log(order);
//             }
//         });
//     }
//          function Buyit() {
//             cobinhood.limitBuy("ETH-USDT", price1, quantity, (error, order) => {
//             if (!error) {
//                 console.log(order);
//             }
//         });
//       };
//       setInterval(Sellit,100)
//       setInterval(Buyit,100)
//     };
// });
// };

function bitcoin() {

    cobinhood.lastPrice("BTC-USDT", (error, lastPrice) => {
        console.log("hi")
        if (!error) {
            console.log("BTC-USDT last price:", lastPrice);
        
        let price3 = 3960
        let price4 = 3972
       
        let quantity1 = .01*(Math.random()*2)
      
        function Sellit1() {
            cobinhood.limitSell("BTC-USDT", price4, quantity1, (error, order) => {
            if (!error) {
                console.log(order);
            }
        });
    }


         function Buyit1() {
            cobinhood.limitBuy("BTC-USDT", price3, quantity1, (error, order) => {
            if (!error) {
                console.log(order);
            }
        });
      };
      setInterval(Sellit1,100)
      setInterval(Buyit1, 100)
    };
});
};



// module.exports = ethereum;
module.exports = bitcoin;
// module.exports = ethereum;
