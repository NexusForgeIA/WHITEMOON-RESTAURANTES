  /* ───────── NAV ───────── */
  function toggleNav() {
    document.getElementById('navLinks').classList.toggle('open');
  }
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
  });

  /* ───────── TABS CARTA ───────── */
  function switchTab(name) {
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    document.querySelectorAll('.menu-pane').forEach(p => p.classList.toggle('active', p.id === 'pane-' + name));
  }

  /* ───────── FOTOS (whitelist Japonesa) ───────── */
  const URL_SUSHI    = 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?auto=format&fit=crop&w=400&q=80'; // sushi variado
  const URL_SASHIMI  = 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=400&q=80'; // sashimi
  const URL_NIGIRI   = 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?auto=format&fit=crop&w=400&q=80'; // nigiri
  const URL_ROLL     = 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=400&q=80'; // rolls
  const URL_GYOZA    = 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80'; // gyozas
  const URL_MISO     = 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80'; // sopa miso
  const URL_EDAMAME  = 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=400&q=80'; // edamame
  const URL_TARTAR   = 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=400&q=80'; // tartar salmón
  const URL_POLLO    = 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&q=80'; // pollo teriyaki
  const URL_POKE     = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80'; // poke bowl
  const URL_MOCHI    = 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80'; // mochi
  const URL_TATAKI   = 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=400&q=80'; // tataki
  const URL_MESA     = 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=400&q=80'; // mesa sushi
  const URL_FALLBACK = 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80'; // bandeja sushi

  const PHOTOS = {
    fallback:    URL_FALLBACK,
    edamame:     URL_EDAMAME,
    tartarSalmon:URL_TARTAR,
    tartarAtun:  URL_TARTAR,
    sashimi:     URL_SASHIMI,
    sopaMiso:    URL_MISO,
    gyozas:      URL_GYOZA,
    takoyaki:    URL_GYOZA,
    nigiriSalmon:URL_NIGIRI,
    nigiriAtun:  URL_NIGIRI,
    uramaki:     URL_ROLL,
    futomaki:    URL_ROLL,
    rainbow:     URL_SUSHI,
    bambuBox:    URL_MESA,
    pollo:       URL_POLLO,
    tataki:      URL_TATAKI,
    poke:        URL_POKE,
    mochi:       URL_MOCHI,
    tartaQueso:  URL_MOCHI
  };

  /* ───────── DATA CARTA COMPLETA (web) ───────── */
  const CARTA = {
    frios: [
      { name: 'Edamame', price: 6.60, desc: 'Judías de soja con sal marina.', img: PHOTOS.edamame },
      { name: 'Wakame', price: 7.15, desc: 'Ensalada de algas con sésamo.', img: PHOTOS.fallback },
      { name: 'Wakame Especial', price: 8.80, desc: 'Con pepino y tartar de salmón.', img: PHOTOS.tartarSalmon },
      { name: 'Ensaladilla Japo', price: 9.35, desc: 'Versión japonesa de la ensaladilla.', img: PHOTOS.fallback },
      { name: 'Tartar de Salmón', price: 14.30, desc: 'Salmón fresco con aliño nikkei.', img: PHOTOS.tartarSalmon },
      { name: 'Tartar de Atún', price: 15.40, desc: 'Atún rojo de almadraba.', img: PHOTOS.tartarAtun },
      { name: 'Sashimi Mixto 6 ud.', price: 10.45, desc: 'Selección del chef.', img: PHOTOS.sashimi },
      { name: 'Sashimi Mixto 12 ud.', price: 19.25, desc: 'Selección del chef.', img: PHOTOS.sashimi }
    ],
    calientes: [
      { name: 'Sopa Miso', price: 5.50, desc: 'Caldo tradicional de miso.', img: PHOTOS.sopaMiso },
      { name: 'Gyozas de Verdura 6 ud.', price: 8.25, desc: 'Dumpling vegetal.', img: PHOTOS.gyozas },
      { name: 'Gyozas de Pollo o Cerdo 6 ud.', price: 9.35, desc: 'Dumpling clásico.', img: PHOTOS.gyozas },
      { name: 'Gyozas de Pato o Langostino 6 ud.', price: 9.90, desc: 'Versión gourmet.', img: PHOTOS.gyozas },
      { name: 'Mix de Gyozas 8 ud.', price: 12.65, desc: 'Variedad para compartir.', img: PHOTOS.gyozas },
      { name: 'Takoyaki', price: 9.35, desc: 'Bolitas de pulpo japonesas.', img: PHOTOS.takoyaki },
      { name: 'Yakitori de Pollo 2 ud.', price: 6.60, desc: 'Brocheta a la brasa.', img: PHOTOS.pollo },
      { name: 'Yakitori de Atún 2 ud.', price: 7.70, desc: 'Brocheta a la brasa.', img: PHOTOS.fallback },
      { name: 'Rollitos Thai de Pollo 5 ud.', price: 7.70, desc: 'Crujientes con salsa.', img: PHOTOS.fallback },
      { name: 'Rollitos Thai de Salmón 5 ud.', price: 9.90, desc: 'Crujientes con salsa.', img: PHOTOS.fallback }
    ],
    nigiris: [
      { name: 'Nigiri Aguacate o Mango x2', price: 4.40, desc: 'Opción vegetal.', img: PHOTOS.nigiriSalmon },
      { name: 'Nigiri Salmón o Langostino x2', price: 4.95, desc: 'Sobre arroz de sushi.', img: PHOTOS.nigiriSalmon },
      { name: 'Nigiri Atún, Salmón Flambeado, Pez Mantequilla... x2', price: 5.50, desc: 'Selección premium.', img: PHOTOS.nigiriAtun },
      { name: 'Nigiri Anguila x2', price: 6.05, desc: 'Anguila glaseada.', img: PHOTOS.nigiriAtun }
    ],
    rolls: [
      { name: 'Hosomaki Pepino o Aguacate x8', price: 5.50, desc: 'Roll fino vegetal.', img: PHOTOS.uramaki },
      { name: 'Hosomaki Mango o Tamago x8', price: 6.05, desc: 'Roll fino dulce.', img: PHOTOS.uramaki },
      { name: 'Hosomaki Surimi/Atún/Salmón x8', price: 7.70, desc: 'Roll fino marino.', img: PHOTOS.uramaki },
      { name: 'Futomaki Pollo Teriyaki x10', price: 12.10, desc: 'Roll grueso de pollo.', img: PHOTOS.futomaki },
      { name: 'Futomaki Atún y Aguacate x10', price: 14.30, desc: 'Roll grueso clásico.', img: PHOTOS.futomaki },
      { name: 'Futomaki Tartar de Atún x10', price: 14.85, desc: 'Roll grueso premium.', img: PHOTOS.futomaki },
      { name: 'Uramaki Pepino y Surimi x10', price: 10.45, desc: 'Roll del revés.', img: PHOTOS.uramaki },
      { name: 'Uramaki Salmón y Aguacate x10', price: 12.10, desc: 'Roll del revés clásico.', img: PHOTOS.uramaki },
      { name: 'Uramaki Langostino Panko x10', price: 13.20, desc: 'Crujiente con langostino.', img: PHOTOS.rainbow },
      { name: 'Uramaki Tartar de Atún x10', price: 14.85, desc: 'Roll del revés premium.', img: PHOTOS.uramaki },
      { name: 'Uramaki Anguila y Aguacate x10', price: 14.85, desc: 'Con anguila glaseada.', img: PHOTOS.uramaki },
      { name: 'Uramaki Tataki de Atún y Aguacate x10', price: 15.40, desc: 'Atún marcado.', star: true, img: PHOTOS.rainbow }
    ],
    bambubox: [
      { name: 'Nigiris 4 ud.', price: 8.80, desc: 'Selección del chef.', img: PHOTOS.nigiriSalmon },
      { name: 'Nigiris 8 ud.', price: 17.60, desc: 'Selección del chef.', img: PHOTOS.nigiriSalmon },
      { name: 'Bambú Box 6 piezas', price: 10.45, desc: 'Surtido para 1 persona.', img: PHOTOS.bambuBox },
      { name: 'Bambú Box 12 piezas', price: 18.70, desc: 'Surtido para compartir.', img: PHOTOS.bambuBox },
      { name: 'Bambú Box 24 piezas', price: 25.30, desc: 'Surtido grande.', img: PHOTOS.bambuBox },
      { name: 'Bambú Box 40 piezas', price: 40.15, desc: 'Para grupo.', star: true, img: PHOTOS.bambuBox }
    ],
    otros: [
      { name: 'Pollo Teriyaki', price: 11.00, desc: 'Salsa teriyaki casera.', img: PHOTOS.pollo },
      { name: 'Salmón Teriyaki', price: 12.10, desc: 'Salsa teriyaki casera.', img: PHOTOS.tataki },
      { name: 'Tataki de Salmón', price: 15.40, desc: 'Salmón marcado en plancha.', img: PHOTOS.tataki },
      { name: 'Tataki de Atún', price: 16.50, desc: 'Atún marcado en plancha.', img: PHOTOS.tataki },
      { name: 'Secreto a Baja Temperatura', price: 18.70, desc: 'Cerdo ibérico jugoso.', img: PHOTOS.fallback },
      { name: 'Poke Vegano', price: 12.65, desc: 'Bowl con verduras y arroz.', img: PHOTOS.poke },
      { name: 'Poke de Salmón/Atún', price: 15.40, desc: 'Bowl con pescado fresco.', img: PHOTOS.poke },
      { name: 'Wok', price: 9.35, desc: 'Salteado oriental (base).', img: PHOTOS.fallback },
      { name: 'Dorayaki Casero', price: 5.50, desc: 'Pastelito de azuki.', img: PHOTOS.mochi },
      { name: 'Tarta de Queso Casera', price: 5.50, desc: 'Receta de la casa.', img: PHOTOS.tartaQueso },
      { name: 'Mochi 1 ud.', price: 3.30, desc: 'Postre japonés.', img: PHOTOS.mochi }
    ]
  };

  const CAT_LABEL = {
    frios: 'Entrantes Fríos',
    calientes: 'Entrantes Calientes',
    nigiris: 'Sushi · Nigiris',
    rolls: 'Sushi · Rolls',
    bambubox: 'Bambú Box',
    otros: 'Otros & Postres'
  };

  /* ───────── DATA MENÚ CHATBOT (selección destacada con precios reales) ───────── */
  const MENU = {
    'Entrantes Fríos': [
      { name: 'Edamame', price: 6.60, img: PHOTOS.edamame },
      { name: 'Wakame Especial', price: 8.80, img: PHOTOS.tartarSalmon },
      { name: 'Tartar de Salmón', price: 14.30, img: PHOTOS.tartarSalmon },
      { name: 'Tartar de Atún', price: 15.40, img: PHOTOS.tartarAtun },
      { name: 'Sashimi Mixto 6 ud.', price: 10.45, img: PHOTOS.sashimi },
      { name: 'Sashimi Mixto 12 ud.', price: 19.25, img: PHOTOS.sashimi }
    ],
    'Entrantes Calientes': [
      { name: 'Sopa Miso', price: 5.50, img: PHOTOS.sopaMiso },
      { name: 'Gyozas Pollo/Cerdo 6 ud.', price: 9.35, img: PHOTOS.gyozas },
      { name: 'Mix Gyozas 8 ud.', price: 12.65, img: PHOTOS.gyozas },
      { name: 'Takoyaki', price: 9.35, img: PHOTOS.takoyaki },
      { name: 'Yakitori Pollo 2 ud.', price: 6.60, img: PHOTOS.pollo },
      { name: 'Rollitos Thai Pollo 5 ud.', price: 7.70, img: PHOTOS.fallback }
    ],
    'Nigiris': [
      { name: 'Nigiri Salmón/Langostino x2', price: 4.95, img: PHOTOS.nigiriSalmon },
      { name: 'Nigiri Atún x2', price: 5.50, img: PHOTOS.nigiriAtun },
      { name: 'Nigiri Anguila x2', price: 6.05, img: PHOTOS.nigiriAtun }
    ],
    'Rolls': [
      { name: 'Hosomaki Salmón x8', price: 7.70, img: PHOTOS.uramaki },
      { name: 'Futomaki Atún y Aguacate x10', price: 14.30, img: PHOTOS.futomaki },
      { name: 'Uramaki Salmón y Aguacate x10', price: 12.10, img: PHOTOS.uramaki },
      { name: 'Uramaki Langostino Panko x10', price: 13.20, img: PHOTOS.rainbow },
      { name: 'Uramaki Tataki Atún x10', price: 15.40, img: PHOTOS.rainbow }
    ],
    'Bambú Box': [
      { name: 'Bambú Box 6 piezas', price: 10.45, img: PHOTOS.bambuBox },
      { name: 'Bambú Box 12 piezas', price: 18.70, img: PHOTOS.bambuBox },
      { name: 'Bambú Box 24 piezas', price: 25.30, img: PHOTOS.bambuBox },
      { name: 'Bambú Box 40 piezas', price: 40.15, img: PHOTOS.bambuBox }
    ],
    'Otros': [
      { name: 'Pollo Teriyaki', price: 11.00, img: PHOTOS.pollo },
      { name: 'Tataki de Salmón', price: 15.40, img: PHOTOS.tataki },
      { name: 'Poke de Salmón/Atún', price: 15.40, img: PHOTOS.poke },
      { name: 'Wok', price: 9.35, img: PHOTOS.fallback }
    ],
    'Postres': [
      { name: 'Dorayaki Casero', price: 5.50, img: PHOTOS.mochi },
      { name: 'Tarta de Queso Casera', price: 5.50, img: PHOTOS.tartaQueso },
      { name: 'Mochi', price: 3.30, img: PHOTOS.mochi }
    ]
  };
  const CAT_ICON = {
    'Entrantes Fríos': '🥗',
    'Entrantes Calientes': '🔥',
    'Nigiris': '🍣',
    'Rolls': '🍱',
    'Bambú Box': '📦',
    'Otros': '🍽️',
    'Postres': '🍮'
  };

  /* ───────── RENDER CARTA WEB ───────── */
  function renderCarta() {
    Object.entries(CARTA).forEach(([cat, items]) => {
      const pane = document.getElementById('pane-' + cat);
      if (!pane) return;
      pane.innerHTML = items.map(it => {
        const star = it.star ? '<span class="star">⭐ Especial</span>' : '';
        const safeName = it.name.replace(/'/g, "\\'");
        const img = it.img || PHOTOS.fallback;
        return `<article class="dish-row">
          ${star}
          <div class="photo"><img src="${img}" alt="${escapeHtml(it.name)}" loading="lazy" onerror="this.src='${URL_FALLBACK}'" /></div>
          <div class="info">
            <h3 title="${escapeHtml(it.name)}">${escapeHtml(it.name)}</h3>
            <p class="desc" title="${escapeHtml(it.desc)}">${escapeHtml(it.desc)}</p>
            <div class="foot">
              <span class="price">${fmt(it.price)}</span>
              <button class="add-btn" type="button" onclick="addFromCarta('${safeName}', ${it.price})">➕ Añadir</button>
            </div>
          </div>
        </article>`;
      }).join('');
    });
  }
  document.addEventListener('DOMContentLoaded', renderCarta);

  /* ───────── CHATBOT ───────── */
  const WA_NUMBER = '34643498465';
  const ENVIO = {
    gratis_desde: 30,      // pedido mínimo envío gratis
    coste: 2.50,           // coste envío si no llega al mínimo
    minimo_pedido: 15,     // pedido mínimo para delivery
    radio_km: 5            // radio máximo de entrega
  };
  const body = () => document.getElementById('chatBody');
  let state = resetState();
  let chatStarted = false;
  let activePicker = null;

  function updatePickerTotals() {
    if (!activePicker) return;
    const subEl = activePicker.querySelector('#picker-subtotal');
    if (!subEl) return;
    subEl.textContent = fmt(calcTotal());
    const envioRow = activePicker.querySelector('#picker-envio-row');
    const sep = activePicker.querySelector('#picker-sep');
    const totalRow = activePicker.querySelector('#picker-total-row');
    if (state.tipoPedido && state.pedido.length) {
      const envio = costeEnvio();
      activePicker.querySelector('#picker-envio').textContent = envio === 0 ? 'GRATIS 🎉' : fmt(envio);
      activePicker.querySelector('#picker-total').textContent = fmt(calcTotalConEnvio());
      envioRow.style.display = '';
      sep.style.display = '';
      totalRow.style.display = '';
    } else {
      envioRow.style.display = 'none';
      sep.style.display = 'none';
      totalRow.style.display = 'none';
    }
  }

  function resetState() {
    return { mode: 'idle', intent: null, personas: null, dia: null, hora: null, nombre: null, telefono: null, pedido: [], tipoPedido: null, direccion: null };
  }

  function normalize(str) {
    return (str || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  function fmt(n) { return n.toFixed(2).replace('.', ',') + '€'; }
  function calcTotal() { return state.pedido.reduce((s, it) => s + it.price * it.qty, 0); }
  function esDomicilio() { return state.tipoPedido === 'A domicilio'; }
  function costeEnvio() {
    if (!esDomicilio()) return 0;
    return calcTotal() >= ENVIO.gratis_desde ? 0 : ENVIO.coste;
  }
  function calcTotalConEnvio() { return calcTotal() + costeEnvio(); }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function scrollChat() {
    const b = body();
    setTimeout(() => { b.scrollTop = b.scrollHeight; }, 30);
  }

  function botMsg(text, delay = 700) {
    return new Promise(resolve => {
      const typing = document.createElement('div');
      typing.className = 'typing';
      typing.innerHTML = '<span></span><span></span><span></span>';
      body().appendChild(typing);
      scrollChat();
      setTimeout(() => {
        typing.remove();
        const m = document.createElement('div');
        m.className = 'msg bot';
        m.textContent = text;
        body().appendChild(m);
        scrollChat();
        resolve();
      }, delay);
    });
  }

  function userMsg(text) {
    const m = document.createElement('div');
    m.className = 'msg user';
    m.textContent = text;
    body().appendChild(m);
    scrollChat();
  }

  function quickReplies(options) {
    const wrap = document.createElement('div');
    wrap.className = 'quick-replies';
    options.forEach(opt => {
      const b = document.createElement('button');
      b.className = 'qr-btn';
      b.type = 'button';
      b.textContent = opt.label;
      b.onclick = () => {
        wrap.remove();
        userMsg(opt.label);
        opt.onClick();
      };
      wrap.appendChild(b);
    });
    body().appendChild(wrap);
    scrollChat();
  }

  function getNext7Days() {
    const days = [];
    const names = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    for (let i = 1; i <= 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const label = `${names[d.getDay()]} ${d.getDate()}/${d.getMonth() + 1}`;
      days.push({ label, value: label });
    }
    return days;
  }

  /* ───────── WELCOME ───────── */
  async function welcome() {
    if (chatStarted) return;
    chatStarted = true;
    await botMsg('¡Irasshaimase! 🎋 Bienvenido/a a Bambú Sushi.\n¿En qué puedo ayudarte?', 1500);
    quickReplies([
      { label: '📅 Reservar mesa', onClick: () => startReserva() },
      { label: '🛵 Pedir a domicilio', onClick: () => startPedido('A domicilio') },
      { label: '🏃 Recoger en local', onClick: () => startPedido('Recoger en local') },
      { label: '🍣 Ver la carta', onClick: () => handleIntent('carta') },
      { label: '⏰ Horarios', onClick: () => handleIntent('horario') }
    ]);
  }

  /* Estados de captura del chatbot:
     - 0 → libre (idle, info, browsing carta sin commitment)
     - 1 → captura activa (datos personales / dirección / tipo pedido / día / hora / personas / dishes)
     - 3 → flujo completado (resumen + WhatsApp)
     Mientras chatStep===1 no se puede cerrar el modal y el launcher se oculta. */
  function chatStep() {
    if (state.mode === 'done') return 3;
    const captureModes = [
      'reserva', 'pedido',
      'await_personas', 'await_dia', 'await_hora',
      'await_dishes', 'await_tipo_pedido', 'await_direccion',
      'await_nombre', 'await_telefono'
    ];
    if (captureModes.includes(state.mode)) return 1;
    return 0;
  }

  function updateChatChrome() {
    const launcher = document.getElementById('chatLauncher');
    const closeBtn = document.querySelector('.chat-close');
    const modal = document.getElementById('chatModal');
    const isOpen = modal.classList.contains('open');
    if (isOpen) {
      launcher.style.display = 'none';
      closeBtn.style.visibility = 'visible';
    } else {
      launcher.style.display = 'flex';
      closeBtn.style.visibility = 'visible';
    }
  }

  function openChat() {
    document.getElementById('chatModal').classList.add('open');
    document.getElementById('chatTooltip').classList.remove('show');
    updateChatChrome();
    welcome();
  }
  function openChatPedido() {
    document.getElementById('chatModal').classList.add('open');
    document.getElementById('chatTooltip').classList.remove('show');
    updateChatChrome();
    if (!chatStarted) {
      chatStarted = true;
      setTimeout(() => startPedido(), 300);
    } else {
      startPedido();
    }
  }
  function closeChat() {
    document.getElementById('chatModal').classList.remove('open');
    updateChatChrome();
  }

  setTimeout(() => { if (!chatStarted) document.getElementById('chatTooltip').classList.add('show'); }, 4000);
  setTimeout(() => { document.getElementById('chatTooltip').classList.remove('show'); }, 12000);

  /* ───────── INTENTS ───────── */
  async function handleIntent(intent) {
    if (intent === 'carta') {
      await botMsg('Tenemos nigiris, sashimi, rolls especiales y hot food 🍣\nTodo fresco del día.\n¿Quieres ver la carta completa o pedir directamente?');
      quickReplies([
        { label: '📖 Ver carta', onClick: () => { closeChat(); document.getElementById('carta').scrollIntoView({ behavior: 'smooth' }); } },
        { label: '🛵 Pedir ahora', onClick: () => startPedido() },
        { label: '📅 Reservar mesa', onClick: () => startReserva() }
      ]);
      return;
    }
    if (intent === 'precio') {
      await botMsg('Nuestros precios van desde 3€ el Mochi hasta 17,50€ el Sashimi Mixto de 12 piezas 🍣\n¿Quieres hacer un pedido?');
      quickReplies([
        { label: '🛵 Pedir ahora', onClick: () => startPedido() },
        { label: '📅 Reservar mesa', onClick: () => startReserva() }
      ]);
      return;
    }
    if (intent === 'alergia') {
      await botMsg('Tenemos opciones para todos 🌿\nEdamame, rolls de verdura y mochi son perfectos.\nIndícanos tu alergia al pedir y lo adaptamos.');
      quickReplies([
        { label: '🛵 Pedir ahora', onClick: () => startPedido() },
        { label: '📅 Reservar mesa', onClick: () => startReserva() }
      ]);
      return;
    }
    if (intent === 'horario') {
      await botMsg('🗓️ Abierto todos los días\n• Miércoles a Jueves: 13:00-16:00 y 20:30-23:00\n• Viernes: 13:00-16:00 y 20:30-23:30\n• Sábado a Domingo: 13:00-16:00 y 20:30-23:30\n• Lunes a Martes: 13:00-16:00 y 20:30-23:00\n¿Reservamos?');
      quickReplies([
        { label: '📅 Reservar mesa', onClick: () => startReserva() },
        { label: '🛵 Pedir ahora', onClick: () => startPedido() }
      ]);
      return;
    }
    if (intent === 'sushi') {
      await botMsg('Llevamos más de 15 años con la auténtica cocina japonesa en la ciudad 🎋\nNuestro chef se formó en Japón y usa ingredientes frescos cada día.');
      quickReplies([
        { label: '📅 Reservar mesa', onClick: () => startReserva() },
        { label: '🛵 Pedir ahora', onClick: () => startPedido() }
      ]);
      return;
    }
    if (intent === 'donde') {
      await botMsg('Estamos en Av. del Aeropuerto, 6\nPoniente Sur, 14004 Córdoba 📍\nTel: 633 624 904 / 957 927 670\nAl confirmar tu reserva te enviamos la ubicación exacta por WhatsApp.');
      quickReplies([
        { label: '📅 Reservar mesa', onClick: () => startReserva() },
        { label: '🛵 Pedir ahora', onClick: () => startPedido() }
      ]);
      return;
    }
    await botMsg('¿Te ayudo con una reserva, un pedido o tienes alguna consulta? 🎋');
    quickReplies([
      { label: '📅 Reservar mesa', onClick: () => startReserva() },
      { label: '🛵 Pedir ahora', onClick: () => startPedido() },
      { label: '🍣 Ver la carta', onClick: () => handleIntent('carta') }
    ]);
  }

  /* ───────── RESERVA FLOW ───────── */
  async function startReserva() {
    state = resetState();
    state.intent = 'reserva';
    state.mode = 'reserva';
    updateChatChrome();
    await botMsg('¡Perfecto! Reservamos tu mesa 🎋\n¿Para cuántas personas?');
    askPersonas();
  }
  function askPersonas() {
    state.mode = 'await_personas';
    quickReplies([
      { label: '1-2', onClick: () => setPersonas('1-2') },
      { label: '3-4', onClick: () => setPersonas('3-4') },
      { label: '5-6', onClick: () => setPersonas('5-6') },
      { label: '+6 personas', onClick: () => setPersonas('+6 personas') }
    ]);
  }
  async function setPersonas(p) {
    state.personas = p;
    await botMsg('¿Qué día prefieres?');
    state.mode = 'await_dia';
    quickReplies(getNext7Days().map(d => ({ label: d.label, onClick: () => setDia(d.value) })));
  }
  async function setDia(d) {
    state.dia = d;
    await botMsg('¿A qué hora?');
    state.mode = 'await_hora';
    quickReplies(['13:00', '13:30', '14:00', '20:00', '20:30', '21:00', '21:30'].map(h => ({
      label: h, onClick: () => setHora(h)
    })));
  }
  async function setHora(h) {
    state.hora = h;
    await botMsg('¿Me dices tu nombre?');
    state.mode = 'await_nombre';
  }

  /* ───────── PEDIDO FLOW ───────── */
  function isAbierto() {
    const now = new Date();
    const totalMin = now.getHours() * 60 + now.getMinutes();
    const comida1 = totalMin >= 13 * 60 && totalMin < 16 * 60;
    const cena = totalMin >= 20 * 60 + 30 && totalMin < 23 * 60 + 30;
    return comida1 || cena;
  }
  function tiempoHastaApertura() {
    const now = new Date();
    const totalMin = now.getHours() * 60 + now.getMinutes();
    const apertura1 = 13 * 60;
    const apertura2 = 20 * 60 + 30;
    let next;
    if (totalMin < apertura1) next = { mins: apertura1 - totalMin, hora: '13:00' };
    else if (totalMin < apertura2) next = { mins: apertura2 - totalMin, hora: '20:30' };
    else next = { mins: (24 * 60 - totalMin) + apertura1, hora: '13:00' };
    const h = Math.floor(next.mins / 60);
    const m = next.mins % 60;
    let falta;
    if (h === 0) falta = `${m} min`;
    else if (m === 0) falta = `${h} ${h === 1 ? 'hora' : 'horas'}`;
    else falta = `${h}h ${m}min`;
    return { falta, hora: next.hora };
  }
  async function avisarCerrado() {
    await botMsg('😔 Lo sentimos, ahora mismo estamos cerrados.\n\n🕐 Nuestro horario de cocina:\n🍱 Comidas: 13:00 - 16:00\n🌙 Cenas: 20:30 - 23:30\n\n¿Quieres hacer una reserva para cuando abramos?');
    quickReplies([
      { label: '📅 Reservar mesa', onClick: () => startReserva() },
      { label: '🔔 ¿Cuándo abren?', onClick: () => mostrarProximaApertura() }
    ]);
  }
  async function mostrarProximaApertura() {
    const { falta, hora } = tiempoHastaApertura();
    await botMsg(`Abrimos en ${falta} — próximo servicio a las ${hora}`);
    quickReplies([
      { label: '📅 Reservar mesa', onClick: () => startReserva() }
    ]);
  }
  async function startPedido(preTipo) {
    if (!isAbierto()) {
      state = resetState();
      state.mode = 'cerrado';
      updateChatChrome();
      await avisarCerrado();
      return;
    }
    state = resetState();
    state.intent = 'pedido';
    state.mode = 'pedido';
    if (preTipo) state.tipoPedido = preTipo;
    updateChatChrome();
    await botMsg('¡Vamos con tu pedido! 🛵');
    await botMsg(`🚚 Envío GRATIS en pedidos desde ${ENVIO.gratis_desde}€\nPor debajo: ${fmt(ENVIO.coste)} · Pedido mínimo ${ENVIO.minimo_pedido}€`);
    await botMsg('Selecciona tus platos:');
    showMenuPicker();
  }

  function showMenuPicker() {
    state.mode = 'await_dishes';
    updateChatChrome();
    const wrap = document.createElement('div');
    wrap.className = 'menu-picker';
    let html = '<div class="note">Precios con IVA incluido (10%)</div>';
    Object.entries(MENU).forEach(([cat, items]) => {
      html += `<div class="cat">${CAT_ICON[cat] || ''} ${cat.toUpperCase()}</div>`;
      items.forEach((it, idx) => {
        const star = it.star ? ' ⭐' : '';
        const img = it.img || PHOTOS.fallback;
        html += `<div class="item"><img class="thumb" src="${img}" alt="" loading="lazy" onerror="this.src='${URL_FALLBACK}'" /><span class="name">${escapeHtml(it.name)}${star}</span><span class="price">${fmt(it.price)}</span><button class="add" data-cat="${escapeHtml(cat)}" data-idx="${idx}" type="button">+</button></div>`;
      });
    });
    html += `<div class="confirm-row"><div class="picker-totals">` +
      `<span>Subtotal: <b id="picker-subtotal">0,00€</b></span>` +
      `<span id="picker-envio-row" style="display:none">Envío: <b id="picker-envio">—</b></span>` +
      `<hr class="sep" id="picker-sep" style="display:none">` +
      `<span class="total" id="picker-total-row" style="display:none">Total: <b id="picker-total">0,00€</b></span>` +
      `</div><button class="confirm-btn" id="picker-confirm" type="button" disabled>✅ Confirmar pedido</button></div>`;
    wrap.innerHTML = html;
    body().appendChild(wrap);
    activePicker = wrap;
    updatePickerTotals();
    scrollChat();

    wrap.querySelectorAll('.item .add').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.cat;
        const idx = parseInt(btn.dataset.idx, 10);
        const item = MENU[cat][idx];
        const existing = state.pedido.find(p => p.name === item.name);
        if (existing) existing.qty += 1;
        else state.pedido.push({ name: item.name, price: item.price, qty: 1 });
        btn.classList.add('added');
        btn.textContent = '✓';
        setTimeout(() => { btn.textContent = '+'; btn.classList.remove('added'); }, 600);
        updatePickerTotals();
        wrap.querySelector('#picker-confirm').disabled = state.pedido.length === 0;
      });
    });

    wrap.querySelector('#picker-confirm').addEventListener('click', () => {
      wrap.querySelectorAll('button').forEach(b => b.disabled = true);
      finishDishes();
    });
  }

  async function finishDishes() {
    if (state.pedido.length === 0) {
      await botMsg('Aún no has elegido ningún plato 🙂');
      return;
    }
    const lista = state.pedido.map(p => `• ${p.name}${p.qty > 1 ? ' x' + p.qty : ''} — ${fmt(p.price * p.qty)}`).join('\n');
    const total = calcTotal();
    await botMsg(`Tu pedido 🛒:\n${lista}\n─────────────\nTotal: ${fmt(total)}`);
    if (state.tipoPedido) {
      if (!(await aplicarEnvio())) return;
      await askDireccionOrName();
    } else {
      await botMsg('¿Recoger en local o a domicilio?');
      state.mode = 'await_tipo_pedido';
      updateChatChrome();
      quickReplies([
        { label: '🏃 Recoger en local', onClick: () => setTipoPedido('Recoger en local') },
        { label: '🛵 A domicilio', onClick: () => setTipoPedido('A domicilio') }
      ]);
    }
  }

  // Devuelve true si el flujo puede continuar; false si queda a la espera de una acción del usuario.
  async function aplicarEnvio() {
    if (!esDomicilio()) return true;
    const total = calcTotal();
    if (total < ENVIO.minimo_pedido) {
      await botMsg(`El pedido mínimo para domicilio es ${ENVIO.minimo_pedido}€.\n¿Quieres añadir algo más o recoger en local?`);
      state.mode = 'await_dishes';
      updateChatChrome();
      quickReplies([
        { label: '➕ Añadir más', onClick: () => showMenuPicker() },
        { label: '🏃 Recoger en local', onClick: async () => { state.tipoPedido = 'Recoger en local'; updatePickerTotals(); await askDireccionOrName(); } }
      ]);
      return false;
    }
    if (total >= ENVIO.gratis_desde) {
      await botMsg(`🚚 Envío: GRATIS 🎉 (tu pedido supera los ${ENVIO.gratis_desde}€)`);
    } else {
      await botMsg(`🚚 Envío: ${fmt(ENVIO.coste)} · Gratis a partir de ${ENVIO.gratis_desde}€`);
    }
    return true;
  }

  async function setTipoPedido(tipo) {
    state.tipoPedido = tipo;
    updatePickerTotals();
    if (!(await aplicarEnvio())) return;
    await askDireccionOrName();
  }

  async function askDireccionOrName() {
    if (state.tipoPedido === 'A domicilio') {
      await botMsg('Genial. ¿Dirección de entrega?');
      state.mode = 'await_direccion';
    } else {
      await botMsg('Perfecto. ¿Tu nombre?');
      state.mode = 'await_nombre';
    }
  }

  async function setDireccion(d) {
    state.direccion = d;
    await botMsg('Anotado 📍 ¿Tu nombre?');
    state.mode = 'await_nombre';
  }

  /* ───────── COMÚN ───────── */
  async function setNombre(n) {
    state.nombre = n;
    const tipo = state.intent === 'pedido' ? 'pedido' : 'reserva';
    await botMsg(`Perfecto ${n}. ¿Tu teléfono de contacto? (9 dígitos)`);
    state.mode = 'await_telefono';
  }

  async function setTelefono(t) {
    state.telefono = t;
    const tipo = state.intent === 'pedido' ? 'pedido' : 'reserva';
    await botMsg(`¡Listo! Aquí tienes el resumen de tu ${tipo}:`);
    showSummary();
  }

  function showSummary() {
    const card = document.createElement('div');
    card.className = 'summary-card';
    const wa = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWaMessage())}`;
    let rows = '';
    if (state.intent === 'pedido') {
      const lista = state.pedido.map(p => `${escapeHtml(p.name)}${p.qty > 1 ? ' x' + p.qty : ''} — ${fmt(p.price * p.qty)}`).join('<br>');
      const envioRow = esDomicilio()
        ? `<div class="row"><span>Envío</span><b>${costeEnvio() === 0 ? 'GRATIS 🎉' : fmt(costeEnvio())}</b></div>`
        : '';
      rows = `
        <h5>Resumen de pedido</h5>
        <div class="row"><span>Nombre</span><b>${escapeHtml(state.nombre)}</b></div>
        <div class="row"><span>Teléfono</span><b>+34 ${escapeHtml(state.telefono)}</b></div>
        <div class="row"><span>Pedido</span><b>${lista}</b></div>
        <div class="row"><span>Tipo</span><b>${escapeHtml(state.tipoPedido)}</b></div>
        ${state.direccion ? `<div class="row"><span>Dirección</span><b>${escapeHtml(state.direccion)}</b></div>` : ''}
        ${envioRow}
        <div class="row total-row"><span>Total</span><b>${fmt(calcTotalConEnvio())}</b></div>
      `;
    } else {
      rows = `
        <h5>Resumen de reserva</h5>
        <div class="row"><span>Nombre</span><b>${escapeHtml(state.nombre)}</b></div>
        <div class="row"><span>Teléfono</span><b>+34 ${escapeHtml(state.telefono)}</b></div>
        <div class="row"><span>Personas</span><b>${escapeHtml(state.personas)}</b></div>
        <div class="row"><span>Día</span><b>${escapeHtml(state.dia)}</b></div>
        <div class="row"><span>Hora</span><b>${escapeHtml(state.hora)}</b></div>
      `;
    }
    card.innerHTML = `${rows}<a class="wa-link" href="${wa}" target="_blank" rel="noopener">📲 Confirmar por WhatsApp</a>`;
    body().appendChild(card);
    if (state.intent === 'reserva') {
      const waLink = card.querySelector('.wa-link');
      waLink.addEventListener('click', () => {
        if (waLink.dataset.confirmado) return;
        waLink.dataset.confirmado = '1';
        botMsg('✅ ¡Perfecto! Hemos recibido tus datos.\nNos pondremos en contacto contigo en breve para confirmar tu reserva.\n\n¡Te esperamos en Bambú Sushi! 🎋');
      });
    }
    scrollChat();
    state.mode = 'done';
    updateChatChrome();
    setTimeout(async () => {
      const final = state.intent === 'pedido'
        ? 'Pulsa el botón verde para enviar tu pedido por WhatsApp y lo confirmaremos en breve. ¡Arigatō! 🎋'
        : 'Pulsa el botón verde para enviarnos tu solicitud.\nTe confirmaremos la reserva por WhatsApp en menos de 1 hora. ¡Arigatō! 🎋';
      await botMsg(final);
    }, 800);
  }

  function buildWaMessage() {
    if (state.intent === 'pedido') {
      const lista = state.pedido.map(p => `• ${p.name}${p.qty > 1 ? ' x' + p.qty : ''} — ${fmt(p.price * p.qty)}`).join('\n');
      const dir = state.direccion ? `\n📍 *Dirección:* ${state.direccion}` : '';
      const envioLine = esDomicilio() ? `\n🚚 *Envío:* ${costeEnvio() === 0 ? 'GRATIS' : fmt(costeEnvio())}` : '';
      return `🛵 *PEDIDO — Bambú Sushi*\n\n👤 *Nombre:* ${state.nombre}\n📞 *Tel:* +34${state.telefono}\n🍣 *Pedido:*\n${lista}${envioLine}\n💰 *Total:* ${fmt(calcTotalConEnvio())}\n📦 *Tipo:* ${state.tipoPedido}${dir}\n\n_Vía chatbot WhiteMoon · whitemoon.es_`;
    }
    return `🎋 *RESERVA — Bambú Sushi*\n\n👤 *Nombre:* ${state.nombre}\n📞 *Tel:* +34${state.telefono}\n👥 *Personas:* ${state.personas}\n📅 *Día:* ${state.dia}\n🕐 *Hora:* ${state.hora}\n\n_Vía chatbot WhiteMoon · whitemoon.es_`;
  }

  /* ───────── AÑADIR DESDE CARTA ───────── */
  async function addFromCarta(name, price) {
    if (!chatStarted) {
      document.getElementById('chatModal').classList.add('open');
      document.getElementById('chatTooltip').classList.remove('show');
      chatStarted = true;
      await botMsg(`¡Buena elección! 🎋`, 600);
      state = resetState();
      state.intent = 'pedido';
    }
    if (state.intent !== 'pedido') {
      state = resetState();
      state.intent = 'pedido';
    }
    const existing = state.pedido.find(p => p.name === name);
    if (existing) existing.qty += 1;
    else state.pedido.push({ name, price, qty: 1 });
    document.getElementById('chatModal').classList.add('open');
    await botMsg(`Añadido ✅ ${name} — ${fmt(price)}\n¿Quieres añadir más platos o finalizar?`);
    quickReplies([
      { label: '➕ Seguir añadiendo', onClick: () => showMenuPicker() },
      { label: '✅ Finalizar pedido', onClick: () => finishDishes() }
    ]);
  }

  /* ───────── INPUT HANDLER ───────── */
  async function onUserSend(e) {
    e.preventDefault();
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    userMsg(text);
    await processInput(text);
  }

  async function processInput(raw) {
    const text = normalize(raw);

    if (state.mode === 'await_nombre') {
      if (raw.length < 2) { await botMsg('¿Me dices tu nombre, por favor?'); return; }
      return setNombre(raw);
    }
    if (state.mode === 'await_telefono') {
      const digits = raw.replace(/\D/g, '');
      if (digits.length !== 9) { await botMsg('Necesito un teléfono de 9 dígitos. ¿Puedes revisarlo?'); return; }
      return setTelefono(digits);
    }
    if (state.mode === 'await_direccion') {
      if (raw.length < 5) { await botMsg('¿Puedes darme una dirección un poco más completa?'); return; }
      return setDireccion(raw);
    }

    if (/(pedido|pedir|llevar|domicilio|recoger|takeaway|delivery|para llevar|quiero pedir)/.test(text)) return startPedido();
    if (/(reserv|mesa|cita|cenar|comer|sentar|noche)/.test(text)) return startReserva();
    if (/(carta|menu|platos|que tienen|que hay)/.test(text)) return handleIntent('carta');
    if (/(precio|cuanto|cuesta|coste|tarifa|vale)/.test(text)) return handleIntent('precio');
    if (/(alerg|intoleran|vegano|vegetarian|celiac|gluten)/.test(text)) return handleIntent('alergia');
    if (/(horario|cuando|abierto|hora|abren|cierran)/.test(text)) return handleIntent('horario');
    if (/(sushi|japones|bambu|chef)/.test(text)) return handleIntent('sushi');
    if (/(donde|ubicacion|direccion|aparcar|parking|llegar|estais|sitio)/.test(text)) return handleIntent('donde');
    if (/(hola|buenas|buenos|hey|holi|irasshaimase)/.test(text)) {
      await botMsg('¡Irasshaimase! 🎋 ¿En qué puedo ayudarte?');
      quickReplies([
        { label: '📅 Reservar mesa', onClick: () => startReserva() },
        { label: '🛵 Pedir ahora', onClick: () => startPedido() },
        { label: '🍣 Ver la carta', onClick: () => handleIntent('carta') }
      ]);
      return;
    }
    if (/(gracias|arigato|merci|ok|vale|perfecto)/.test(text)) {
      await botMsg('¡A ti! 🙏 ¿Algo más en lo que pueda ayudarte?');
      return;
    }

    await botMsg('¿Te ayudo con una reserva, un pedido o tienes alguna consulta? 🎋');
    quickReplies([
      { label: '📅 Reservar mesa', onClick: () => startReserva() },
      { label: '🛵 Pedir ahora', onClick: () => startPedido() },
      { label: '🍣 Ver la carta', onClick: () => handleIntent('carta') }
    ]);
  }
