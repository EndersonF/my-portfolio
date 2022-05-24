import nodeMailer from 'nodemailer';
import { google} from 'googleapis';


const { OAuth2 } = google.auth;
const email = process.env.MAILADRESS;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;

const oauth2Client = new OAuth2(clientId, clientSecret);
oauth2Client.setCredentials({refresh_token: refreshToken});

const acessToken = oauth2Client.getAccessToken();

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: email,
        clientId,
        clientSecret,
        refreshToken,
        accessToken: acessToken
    }
});

const mailer = ({ senderMail, name, text }) => {
    const from = `${name} <${senderMail}>`;
    const message = {
      from,
      to: `${email}`,
      subject: `Nova mensagem de contato - ${name}`,
      text,
      replyTo: from
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
          error ? reject(error) : resolve(info)
        );
      });
    };

    export default async (req, res) => {
        const { senderMail, name, content } = req.body;
      
        if (senderMail === '' || name === '' || content === '') {
          res.status(403).send();
          return;
        }
      
        const mailerRes = await mailer({ senderMail, name, text: content });
        res.send(mailerRes);
      };