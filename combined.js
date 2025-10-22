// --- Transport options ---
    const transportOptions = {
      server: "wss://frasterixk.servehttp.com:8089/ws"  // replace with your Asterisk WebSocket URL
    };

    // --- SIP URI ---
    const uri = SIP.UserAgent.makeURI("sip:178252@frasterixk.servehttp.com"); // your SIP account

    // --- UserAgent options ---
    const userAgentOptions = {
      uri: uri,
      authorizationUsername: "178252",     // your SIP username
      authorizationPassword: "178252",  // your SIP password
      transportOptions: transportOptions
    };

    // --- Create UserAgent ---
    const userAgent = new SIP.UserAgent(userAgentOptions);

    // --- Registerer ---
    const registerer = new SIP.Registerer(userAgent);

    // --- Start UserAgent and register ---
    userAgent.start()
      .then(() => registerer.register())
      .catch(err => console.error("❌ Error starting UserAgent:", err));

      userAgent.start().then(() => {
  const target = UserAgent.makeURI("sip:2851173001@frasterixk.servehttp.com");

  const inviter = new Inviter(userAgent, target);
  inviter.invite();
});
