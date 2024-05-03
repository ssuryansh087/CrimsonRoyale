import React, { useEffect } from 'react'

function Concierge() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
      stylesheet: "https://webchat-styler-css.botpress.app/prod/ca078bd3-dede-41eb-af55-eb3937676467/v90902/style.css",
      composerPlaceholder: "Chat with the Crimson Royale Virtual Concierge",
      botConversationDescription: "Here to help you with anything Crimson Royale!",
      botId: "4fce8fd0-6f37-4715-975c-bf6744cc607a",
      hostUrl: "https://cdn.botpress.cloud/webchat/v1",
      messagingUrl: "https://messaging.botpress.cloud",
      clientId: "4fce8fd0-6f37-4715-975c-bf6744cc607a",
      avatarUrl: 'https://i.postimg.cc/gcZK0m93/Chatbot-Profile.png',
      webhookId: "42f7afa4-44ed-4b30-ac44-1a22e3aa419f",
      enablePersistHistory: "false",
      enableConversationDeletion: "true",
      lazySocket: true,
      themeName: "prism",
      botName: "Crimson Royale Virtual Concierge",
      frontendVersion: "v1",
      theme: "prism",
      themeColor: "#2563eb"
      })
    }
  }, [])
  return (
    <div id="webchat" />
  );
}

export default Concierge;