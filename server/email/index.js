const nodemailer = require('nodemailer');
    
const sendEmail = (status, recepientEmail) => {
    const transport = {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user:'lukezhang10@gmail.com',
            pass: 'discount_53@Park'
        }
    }

    const transporter = nodemailer.createTransport(transport);

    let orderConfirmed = {
        from: ' "Customer Experience - Rice Is Rice" <customerexp@riceisrice.com> ',
        to: recepientEmail,
        subject: 'Order Confirmation',
        text: 'Your order is confirmed!',
        html: '<p>Your order is confirmed</p>'
    }

    let orderShipped = {
        from: ' "Customer Experience - Rice Is Rice" <customerexp@riceisrice.com> ',
        to: recepientEmail,
        subject: 'Order Shipped!',
        text: 'Your order has shipped!',
        html: '<p>Your order has shipped</p>'
    }

    transporter.verify(function(error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take our messages');
        }
    })

    if (status === 'confirmed') {
        transporter.sendMail(orderConfirmed, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('info', info);
            
        })   
    } else if (status === 'shipped') {
        transporter.sendMail(orderShipped, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('info', info);
            
        })
    }
}


module.exports = sendEmail;

