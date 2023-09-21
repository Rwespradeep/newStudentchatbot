// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import UserBubblewidget from '../widgets/UserBubblewidget';
import DateStrip from '../widgets/DateStrip';
import TimeStrip from '../widgets/TimeStrip';
import CourseWidget from '../widgets/CourseWidget';

const botName = 'Student Bot';

const config = {
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`, {
        widget: 'WelcomeBtn'
    })],
    botName: botName,
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
    widgets: [
        {
            widgetName: 'WelcomeBtn',
            widgetFunc: (props) => <UserBubblewidget {...props} msgText={"Welcome"} />
        },
        {
            widgetName: 'ThanksBtn',
            widgetFunc: (props) => <UserBubblewidget {...props} msgText={"Thanks"} />
        },
        {
            widgetName: 'PickdateBtn',
            widgetFunc: (props) => <UserBubblewidget {...props} msgText={"Pick Date"} />
        },
        {
            widgetName: 'dateStrip',
            widgetFunc: (props) => <DateStrip {...props} />
        },
        {
            widgetName: 'timeStrip',
            widgetFunc: (props) => <TimeStrip {...props} />
        }, {
            widgetName: 'courseWidget',
            widgetFunc: (props) => <CourseWidget {...props} />
        }
    ]
};

export default config;