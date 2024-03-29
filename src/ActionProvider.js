export default class ActionProvider {
	constructor(createChatBotMessage, setStateFunc, createClientMessage) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
		this.createClientMessage = createClientMessage;
	}

	greet() {
		const greetingMessage = this.createChatBotMessage('Hi, friend.');
		this.updateChatbotState(greetingMessage);
	}

	handleJavascriptList = () => {
		const message = this.createChatBotMessage(
			"Fantastic, I've got the following resources for you on Javascript:",
			{
				widget: 'javascriptLinks'
			}
		);

		this.updateChatbotState(message);
	};

	updateChatbotState(message) {
		// NOTE: This function is set in the constructor, and is passed in
		// from the top level Chatbot component. The setState function here
		// actually manipulates the top level state of the Chatbot, so it's
		// important that we make sure that we preserve the previous state.
		this.setState((prevState) => ({
			...prevState,
			messages: [ ...prevState.messages, message ]
		}));
	}
}
