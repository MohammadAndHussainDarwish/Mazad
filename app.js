const positions = [
  { label: "حارس المرمى", short: "GK", auction: { name: "إيكر كاسياس", overall: 93, flag: "🇪🇸", club: "RMA", stats: [85, 93, 88, 91, 58, 84] }, reserve: { name: "مارك أندريه تير شتيغن", overall: 89, flag: "🇩🇪", club: "BAR", stats: [84, 90, 89, 88, 46, 86] } },
  { label: "قلب الدفاع الأيمن", short: "CB", auction: { name: "سيرجيو راموس", overall: 92, flag: "🇪🇸", club: "RMA", stats: [74, 70, 76, 72, 92, 88] }, reserve: { name: "جيرارد بيكيه", overall: 88, flag: "🇪🇸", club: "BAR", stats: [62, 61, 73, 69, 89, 80] } },
  { label: "قلب الدفاع الأيسر", short: "CB", auction: { name: "باولو مالديني", overall: 94, flag: "🇮🇹", club: "MIL", stats: [86, 57, 75, 72, 96, 82] }, reserve: { name: "فابيو كانافارو", overall: 89, flag: "🇮🇹", club: "JUV", stats: [83, 45, 60, 65, 95, 77] } },
  { label: "الظهير الأيمن", short: "RB", auction: { name: "كافو", overall: 90, flag: "🇧🇷", club: "MIL", stats: [91, 72, 82, 85, 84, 88] }, reserve: { name: "داني ألفيش", overall: 88, flag: "🇧🇷", club: "BAR", stats: [86, 75, 84, 90, 78, 78] } },
  { label: "الظهير الأيسر", short: "LB", auction: { name: "روبرتو كارلوس", overall: 91, flag: "🇧🇷", club: "RMA", stats: [94, 78, 81, 84, 82, 91] }, reserve: { name: "مارسيلو", overall: 88, flag: "🇧🇷", club: "RMA", stats: [82, 80, 87, 91, 80, 78] } },
  { label: "لاعب ارتكاز", short: "CDM", auction: { name: "سيرخيو بوسكيتس", overall: 91, flag: "🇪🇸", club: "BAR", stats: [42, 62, 86, 79, 87, 78] }, reserve: { name: "كلود ماكيليلي", overall: 89, flag: "🇫🇷", club: "RMA", stats: [68, 57, 72, 71, 92, 86] } },
  { label: "وسط الملعب", short: "CM", auction: { name: "لوكا مودريتش", overall: 93, flag: "🇭🇷", club: "RMA", stats: [76, 80, 91, 92, 75, 77] }, reserve: { name: "أندريس إنييستا", overall: 91, flag: "🇪🇸", club: "BAR", stats: [74, 78, 92, 94, 62, 69] } },
  { label: "صانع ألعاب", short: "CAM", auction: { name: "زين الدين زيدان", overall: 96, flag: "🇫🇷", club: "RMA", stats: [85, 92, 94, 95, 72, 86] }, reserve: { name: "كاكا", overall: 91, flag: "🇧🇷", club: "MIL", stats: [91, 87, 86, 92, 49, 81] } },
  { label: "الجناح الأيمن", short: "RW", auction: { name: "ليونيل ميسي", overall: 97, flag: "🇦🇷", club: "BAR", stats: [89, 95, 95, 98, 38, 75] }, reserve: { name: "لويس فيغو", overall: 91, flag: "🇵🇹", club: "RMA", stats: [88, 90, 91, 93, 44, 75] } },
  { label: "الجناح الأيسر", short: "LW", auction: { name: "كريستيانو رونالدو", overall: 97, flag: "🇵🇹", club: "RMA", stats: [94, 96, 86, 93, 46, 91] }, reserve: { name: "رونالدينيو", overall: 95, flag: "🇧🇷", club: "BAR", stats: [91, 91, 90, 97, 43, 80] } },
  { label: "رأس الحربة", short: "ST", auction: { name: "رونالدو نازاريو", overall: 96, flag: "🇧🇷", club: "INT", stats: [96, 97, 80, 94, 46, 82] }, reserve: { name: "تييري هنري", overall: 93, flag: "🇫🇷", club: "ARS", stats: [94, 93, 85, 92, 46, 82] } }
];

const alternatePlayers = [
  [{ name: "جيانلويجي بوفون", overall: 92, flag: "🇮🇹", club: "JUV", stats: [88, 92, 76, 91, 49, 90] }, { name: "مانويل نوير", overall: 92, flag: "🇩🇪", club: "BAY", stats: [89, 92, 91, 89, 55, 88] }, { name: "أوليفر كان", overall: 91, flag: "🇩🇪", club: "BAY", stats: [87, 93, 78, 90, 52, 91] }, { name: "تيبو كورتوا", overall: 92, flag: "🇧🇪", club: "RMA", stats: [85, 93, 89, 90, 47, 88] }],
  [{ name: "أليساندرو نيستا", overall: 92, flag: "🇮🇹", club: "MIL", stats: [78, 52, 69, 67, 96, 84] }, { name: "فيرجيل فان دايك", overall: 91, flag: "🇳🇱", club: "LIV", stats: [78, 60, 71, 72, 92, 86] }, { name: "ماتس هوملز", overall: 90, flag: "🇩🇪", club: "BVB", stats: [68, 58, 76, 72, 91, 85] }, { name: "أنطونيو روديغر", overall: 91, flag: "🇩🇪", club: "RMA", stats: [82, 54, 71, 73, 91, 89] }],
  [{ name: "فرانز بيكنباور", overall: 93, flag: "🇩🇪", club: "BAY", stats: [83, 65, 80, 81, 94, 88] }, { name: "جون تيري", overall: 89, flag: "🏴", club: "CHE", stats: [48, 55, 68, 63, 94, 89] }, { name: "فيليب لام", overall: 92, flag: "🇩🇪", club: "BAY", stats: [84, 65, 87, 87, 90, 72] }, { name: "أشرف حكيمي", overall: 89, flag: "🇲🇦", club: "PSG", stats: [95, 72, 82, 87, 76, 82] }],
  [{ name: "فيليب لام", overall: 92, flag: "🇩🇪", club: "BAY", stats: [84, 65, 87, 87, 90, 72] }, { name: "خافيير زانيتي", overall: 89, flag: "🇦🇷", club: "INT", stats: [84, 69, 78, 80, 88, 83] }, { name: "ديفيد ألابا", overall: 89, flag: "🇦🇹", club: "BAY", stats: [82, 72, 85, 85, 82, 78] }, { name: "ألكسندر أرنولد", overall: 90, flag: "🏴", club: "LIV", stats: [80, 72, 91, 85, 79, 72] }],
  [{ name: "آشلي كول", overall: 90, flag: "🏴", club: "CHE", stats: [88, 58, 74, 77, 91, 79] }, { name: "ديفيد ألابا", overall: 89, flag: "🇦🇹", club: "BAY", stats: [82, 72, 85, 85, 82, 78] }, { name: "ألفونسو ديفيز", overall: 89, flag: "🇨🇦", club: "BAY", stats: [96, 65, 81, 87, 78, 84] }, { name: "مارسيلو", overall: 88, flag: "🇧🇷", club: "RMA", stats: [82, 80, 87, 91, 80, 78] }],
  [{ name: "باتريك فييرا", overall: 91, flag: "🇫🇷", club: "ARS", stats: [79, 74, 83, 80, 91, 91] }, { name: "جينارو غاتوزو", overall: 89, flag: "🇮🇹", club: "MIL", stats: [71, 65, 72, 72, 91, 90] }, { name: "جوشوا كيميش", overall: 91, flag: "🇩🇪", club: "BAY", stats: [72, 74, 89, 84, 88, 82] }, { name: "رودري", overall: 91, flag: "🇪🇸", club: "MCI", stats: [66, 80, 91, 86, 87, 85] }],
  [{ name: "تشافي هيرنانديز", overall: 93, flag: "🇪🇸", club: "BAR", stats: [72, 75, 96, 93, 65, 70] }, { name: "بول سكولز", overall: 92, flag: "🏴", club: "MUN", stats: [70, 91, 93, 87, 69, 78] }, { name: "توني كروس", overall: 93, flag: "🇩🇪", club: "RMA", stats: [65, 88, 96, 90, 70, 78] }, { name: "إلكاي غوندوغان", overall: 89, flag: "🇩🇪", club: "MCI", stats: [65, 78, 90, 87, 75, 77] }],
  [{ name: "دييغو مارادونا", overall: 98, flag: "🇦🇷", club: "NAP", stats: [89, 93, 91, 99, 42, 76] }, { name: "ريفالدو", overall: 92, flag: "🇧🇷", club: "BAR", stats: [82, 93, 87, 91, 45, 80] }, { name: "جمال موسيالا", overall: 91, flag: "🇩🇪", club: "BAY", stats: [84, 85, 88, 93, 63, 72] }, { name: "جود بيلينغهام", overall: 92, flag: "🏴", club: "RMA", stats: [81, 86, 87, 90, 78, 85] }],
  [{ name: "محمد صلاح", overall: 92, flag: "🇪🇬", club: "LIV", stats: [93, 91, 81, 90, 45, 75] }, { name: "جورج بست", overall: 94, flag: "🇬🇧", club: "MUN", stats: [94, 92, 84, 96, 37, 74] }, { name: "آريين روبن", overall: 91, flag: "🇳🇱", club: "BAY", stats: [92, 87, 86, 93, 40, 75] }, { name: "ساديو ماني", overall: 90, flag: "🇸🇳", club: "BAY", stats: [92, 88, 82, 90, 44, 78] }],
  [{ name: "نيمار", overall: 94, flag: "🇧🇷", club: "PSG", stats: [91, 87, 86, 98, 37, 61] }, { name: "إيدين هازارد", overall: 91, flag: "🇧🇪", club: "CHE", stats: [91, 83, 86, 94, 35, 66] }, { name: "فرانك ريبيري", overall: 91, flag: "🇫🇷", club: "BAY", stats: [89, 87, 87, 94, 42, 67] }, { name: "فينيسيوس جونيور", overall: 94, flag: "🇧🇷", club: "RMA", stats: [95, 84, 81, 95, 39, 72] }],
  [{ name: "روبرت ليفاندوفسكي", overall: 93, flag: "🇵🇱", club: "BAY", stats: [78, 95, 82, 86, 44, 84] }, { name: "لويس سواريز", overall: 93, flag: "🇺🇾", club: "BAR", stats: [81, 94, 82, 88, 42, 85] }, { name: "هاري كين", overall: 93, flag: "🏴", club: "BAY", stats: [72, 94, 84, 85, 48, 82] }, { name: "إيرلينغ هالاند", overall: 94, flag: "🇳🇴", club: "MCI", stats: [89, 96, 76, 81, 45, 88] }]
];

const bigFiveLeagueClubs = new Set(["RMA", "BAR", "MIL", "LIV", "ARS", "PSG", "BAY", "JUV", "MUN", "NAP", "BVB", "MCI", "INT", "CHE"]);
const statNames = ["PAC", "SHO", "PAS", "DRI", "DEF", "PHY"];
const academyProspectNames = [
  "سامي الحسن", "حازم عادل", "مهند الشريف", "فارس مراد", "زياد صالح", "خالد شاهين",
  "وليد عثمان", "عادل بركات", "محمود إسماعيل", "أحمد الراوي", "فهد منصور"
];
const academyProspectRatings = [65, 67, 69, 71, 73, 75, 77, 79, 66, 70, 74];
const academyProspectFlags = ["🇪🇬", "🇸🇦", "🇲🇦", "🇩🇿", "🇹🇳", "🇧🇷", "🇫🇷", "🇪🇸", "🇮🇹", "🇳🇱"];
const bigFiveLeagueClubCodes = [...bigFiveLeagueClubs];
const weakPlayersByPosition = buildWeakPlayers();
const initialBudget = 8_000_000;
const bidStep = 300_000;
let managers = [];
let roundPlayers = [];
let previousGamePlayerPairs = [];
let roundIndex = 0;
let starter = 0;
let turn = 0;
let leader = null;
let bidAmount = 0;
let passedWithoutBid = [];
let reserveRevealed = false;
let resolvingAuction = false;
let tradeState = null;
let tradedRosterSlots = new Set();
let toastTimer;

const $ = (selector) => document.querySelector(selector);
const setupScreen = $("#setup-screen");
const gameScreen = $("#game-screen");
const resultScreen = $("#result-screen");

$("#setup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const names = [$("#manager-one").value.trim(), $("#manager-two").value.trim()];
  beginGame(names.map((name, index) => ({ name: name || `المدرب ${index + 1}`, balance: initialBudget, roster: [] })));
});

$("#bid-button").addEventListener("click", placeBid);
$("#pass-button").addEventListener("click", passTurn);
$("#trade-player-options").addEventListener("click", (event) => {
  const option = event.target.closest("[data-trade-slot]");
  if (option) completePlayerTrade(Number(option.dataset.tradeSlot));
});
$("#trade-decline").addEventListener("click", declinePlayerTrade);
$("#rematch-button").addEventListener("click", () => beginGame(managers.map((manager) => ({ name: manager.name, balance: initialBudget, roster: [] }))));
$("#names-button").addEventListener("click", () => {
  $("#manager-one").value = managers[0].name;
  $("#manager-two").value = managers[1].name;
  resultScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
});

function beginGame(nextManagers) {
  managers = nextManagers;
  tradeState = null;
  tradedRosterSlots = new Set();
  roundPlayers = drawRoundPlayers();
  roundIndex = 0;
  starter = 0;
  resetAuction();
  setupScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  renderRound();
}

function drawRoundPlayers() {
  const usedPlayerNames = new Set();
  const nextRoundPlayers = positions.map((position, index) => {
    const candidates = [...new Map([position.auction, position.reserve, ...alternatePlayers[index], ...weakPlayersByPosition[index]]
      .filter((candidate) => bigFiveLeagueClubs.has(candidate.club))
      .filter((candidate) => candidate.overall >= 65)
      .map((candidate) => [candidate.name, candidate])).values()]
      .filter((candidate) => !usedPlayerNames.has(candidate.name));
    const previousPair = previousGamePlayerPairs[index] || [];
    const freshCandidates = candidates.filter((candidate) => !previousPair.includes(candidate.name));
    const shuffledCandidates = shufflePlayers(freshCandidates.length >= 2 ? freshCandidates : candidates);
    const auction = shuffledCandidates[0];
    const reserve = shuffledCandidates[1];
    usedPlayerNames.add(auction.name);
    usedPlayerNames.add(reserve.name);
    return { ...position, auction, reserve };
  });
  previousGamePlayerPairs = nextRoundPlayers.map(({ auction, reserve }) => [auction.name, reserve.name]);
  return nextRoundPlayers;
}

function shufflePlayers(players) {
  const shuffledPlayers = [...players];
  for (let candidateIndex = shuffledPlayers.length - 1; candidateIndex > 0; candidateIndex -= 1) {
    const randomIndex = Math.floor(Math.random() * (candidateIndex + 1));
    [shuffledPlayers[candidateIndex], shuffledPlayers[randomIndex]] = [shuffledPlayers[randomIndex], shuffledPlayers[candidateIndex]];
  }
  return shuffledPlayers;
}

function buildWeakPlayers() {
  return positions.map((_, positionIndex) => {
    const overall = academyProspectRatings[positionIndex];
    const stats = statNames.map((_, statIndex) => Math.max(25, overall - 12 + ((positionIndex * 7 + statIndex * 5) % 17)));
    return [{
      name: academyProspectNames[positionIndex],
      overall,
      flag: academyProspectFlags[positionIndex % academyProspectFlags.length],
      club: bigFiveLeagueClubCodes[(positionIndex * 5) % bigFiveLeagueClubCodes.length],
      stats
    }];
  });
}

function resetAuction() {
  turn = starter;
  leader = null;
  bidAmount = 0;
  passedWithoutBid = [];
  reserveRevealed = false;
  resolvingAuction = false;
}

function placeBid() {
  if (turn === null || resolvingAuction || !managers[turn]) return;
  const nextAmount = leader === null ? bidStep : bidAmount + bidStep;
  if (managers[turn].balance < nextAmount) {
    startPlayerTrade(turn);
    return;
  }
  leader = turn;
  bidAmount = nextAmount;
  turn = 1 - turn;
  passedWithoutBid = [];
  renderRound();
}

function availableTradeSlots(managerIndex) {
  return managers[managerIndex].roster
    .map((_, index) => index)
    .filter((index) => managers[1 - managerIndex].roster[index] && !tradedRosterSlots.has(index));
}

function startPlayerTrade(managerIndex) {
  const availableSlots = availableTradeSlots(managerIndex);
  if (!availableSlots.length) {
    showToast("لا يوجد لاعب متاح للتبديل في هذه الجولة");
    return;
  }
  tradeState = { managerIndex, chooserIndex: 1 - managerIndex, availableSlots };
  turn = tradeState.chooserIndex;
  renderTradePicker();
  renderRound();
}

function renderTradePicker() {
  const picker = $("#trade-picker");
  const options = $("#trade-player-options");
  if (!tradeState) {
    picker.classList.add("hidden");
    options.innerHTML = "";
    return;
  }
  const { managerIndex, chooserIndex, availableSlots } = tradeState;
  $("#trade-picker-title").textContent = `${managers[chooserIndex].name}، اختر لاعبًا من تشكيلة ${managers[managerIndex].name} للتبديل`;
  options.innerHTML = availableSlots.map((index) => {
    const offeredPlayer = managers[managerIndex].roster[index];
    const receivedPlayer = managers[chooserIndex].roster[index];
    return `<button class="trade-option" type="button" data-trade-slot="${index}"><span class="trade-option-position">${positions[index].label}</span><span class="trade-option-names"><b>${offeredPlayer.name} · ${offeredPlayer.overall}</b><span>مقابل</span><b>${receivedPlayer.name} · ${receivedPlayer.overall}</b></span></button>`;
  }).join("");
  picker.classList.remove("hidden");
}

function completePlayerTrade(slotIndex) {
  if (!tradeState || !tradeState.availableSlots.includes(slotIndex)) return;
  const { managerIndex, chooserIndex } = tradeState;
  const offeredPlayer = managers[managerIndex].roster[slotIndex];
  const receivedPlayer = managers[chooserIndex].roster[slotIndex];
  managers[managerIndex].roster[slotIndex] = receivedPlayer;
  managers[chooserIndex].roster[slotIndex] = offeredPlayer;
  managers[managerIndex].balance += 1_000_000;
  tradedRosterSlots.add(slotIndex);
  tradeState = null;
  turn = managerIndex;
  showToast(`${managers[managerIndex].name} حصل على 1,000,000 وتم تبديل لاعبي ${positions[slotIndex].label}`);
  renderRound();
}

function declinePlayerTrade() {
  if (!tradeState) return;
  turn = tradeState.managerIndex;
  tradeState = null;
  renderRound();
}

function passTurn() {
  if (turn === null || resolvingAuction) return;
  if (leader !== null) {
    reserveRevealed = true;
    resolvingAuction = true;
    renderRound();
    window.setTimeout(() => settleAuction(leader, 1 - leader, bidAmount), 1000);
    return;
  }
  reserveRevealed = true;
  passedWithoutBid.push(turn);
  if (passedWithoutBid.length === 2) {
    settleAuction(starter, 1 - starter, 0);
    return;
  }
  turn = 1 - turn;
  renderRound();
}

function settleAuction(winner, loser, price) {
  const pair = roundPlayers[roundIndex];
  managers[winner].roster.push({ ...pair.auction, position: pair.short, price, acquiredByAuction: true });
  managers[winner].balance -= price;
  managers[loser].roster.push({ ...pair.reserve, position: pair.short, price: 0, acquiredByAuction: false });
  const description = price ? `${managers[winner].name} فاز بـ ${pair.auction.name} مقابل ${formatMoney(price)}` : `لا مزايدات؛ وُزّع اللاعبان مجانًا`;
  showToast(description);
  starter = 1 - starter;
  roundIndex += 1;
  renderManagers();
  renderSquads();
  if (roundIndex === positions.length) {
    window.setTimeout(showResults, 650);
    return;
  }
  resetAuction();
  renderRound();
}

function renderRound() {
  const pair = roundPlayers[roundIndex];
  $("#round-number").textContent = String(roundIndex + 1).padStart(2, "0");
  $("#round-progress").style.width = `${((roundIndex + 1) / positions.length) * 100}%`;
  $("#position-label").textContent = pair.label;
  $("#position-index").textContent = `المركز ${String(roundIndex + 1).padStart(2, "0")} من 11`;
  $("#auction-card").innerHTML = cardMarkup(pair.auction, pair.short, false);
  $("#reserve-card").innerHTML = cardMarkup(pair.reserve, pair.short, true, reserveRevealed);
  $("#bid-label").textContent = leader === null ? "المزايدة الافتتاحية" : "أعلى مزايدة حاليًا";
  $("#bid-value").textContent = formatMoney(leader === null ? bidStep : bidAmount + bidStep);
  $("#turn-label").textContent = tradeState ? `${managers[turn].name}، اختر لاعبًا للتبديل` : resolvingAuction ? "كشف اللاعب البديل..." : turn === null ? "اكتمل المزاد" : `${managers[turn].name}، دورك الآن`;
  const amountDue = leader === null ? bidStep : bidAmount + bidStep;
  const canAffordBid = turn !== null && managers[turn].balance >= amountDue;
  const hasTradeOptions = turn !== null && availableTradeSlots(turn).length > 0;
  $("#bid-button-label").textContent = canAffordBid ? leader === null ? "زايد 300 ألف" : `زايد ${formatMoney(bidStep)}` : "اطلب تبديل لاعب";
  $("#bid-help").textContent = canAffordBid
    ? leader === null ? "افتح المزايدة أو مرّر الدور للمدرب الآخر" : `الحد الحالي ${formatMoney(bidAmount)} · كل زيادة ${formatMoney(bidStep)}`
    : hasTradeOptions ? "رصيدك لا يكفي؛ التبديل يمنحك مليونًا ويختار المنافس اللاعب" : "رصيدك لا يكفي ولا يوجد لاعب متاح للتبديل";
  $("#bid-button").disabled = turn === null || resolvingAuction || tradeState !== null || (!canAffordBid && !hasTradeOptions);
  $("#pass-button").disabled = turn === null || resolvingAuction || tradeState !== null;
  renderTradePicker();
  renderManagers();
  renderSquads();
}

const clubKits = {
  RMA: ["#eee9d8", "#aaa58f"], BAR: ["#962b43", "#541b31"], MIL: ["#bd3038", "#661e28"],
  LIV: ["#c73639", "#701e29"], ARS: ["#c43d42", "#702537"], PSG: ["#3875b2", "#1c385e"],
  BAY: ["#d64349", "#762534"], JUV: ["#343535", "#15191a"], MUN: ["#d73a3d", "#742433"],
  NAP: ["#64b2d0", "#285879"], BVB: ["#d8bf42", "#796525"], MCI: ["#70c4d1", "#2d6576"],
  INT: ["#31578b", "#1d304f"], CHE: ["#3876bd", "#1d3968"]
};

function cardMarkup(player, position, isReserve, revealReserve = false) {
  if (isReserve && !revealReserve) {
    return `<article class="fut-card is-reserve mystery-card" aria-label="اللاعب البديل مخفي حتى انتهاء المزايدة"><div class="fut-card-inner"><div class="mystery-rating">??<span>${position}</span></div><div class="mystery-art" aria-hidden="true"><span>?</span></div><div class="mystery-name">يكشف بعد الحسم</div><div class="mystery-stats" aria-hidden="true">••• &nbsp; •••</div></div></article>`;
  }
  const kit = clubKits[player.club] || ["#416b50", "#243e34"];
  const stats = player.stats.map((value, index) => `<span><b>${value}</b> ${statNames[index]}</span>`).join("");
  return `<article class="fut-card${isReserve ? " is-reserve" : ""}"><div class="fut-card-inner"><div class="card-top"><div class="card-rating"><strong>${player.overall}</strong><span class="card-position">${position}</span><span class="card-team">${player.club}</span></div><span class="card-country" aria-label="العلم">${player.flag}</span></div><div class="card-art" style="--kit-light:${kit[0]};--kit-dark:${kit[1]}" aria-hidden="true"><svg class="player-portrait" viewBox="0 0 240 220" preserveAspectRatio="xMidYMid slice"><path d="M0 0h240v220H0z" fill="#102b2b"/><path d="M0 36h240M0 76h240M0 116h240M0 156h240M0 196h240M38 0v220M78 0v220M118 0v220M158 0v220M198 0v220" stroke="#e8f0ce" stroke-opacity=".1"/><path d="m0 220 240-126M0 180 203 0M55 220 240 110M0 104 140 0" stroke="#e8f0ce" stroke-opacity=".12" stroke-width="2"/><path d="M24 220c7-43 29-68 70-84l26-9 26 9c41 16 63 41 70 84z" fill="var(--kit-dark)"/><path d="M24 220c7-43 29-68 70-84l14-5 12 12 12-12 14 5c41 16 63 41 70 84z" fill="var(--kit-light)" opacity=".94"/><path d="m104 135 16 14 16-14 12 7-14 22h-28l-14-22z" fill="#f1ead6"/><path d="M101 124h38v31c-8 10-30 10-38 0z" fill="#bd8061"/><path d="M81 68c0-33 17-54 40-54s40 21 40 54v26c0 29-18 48-40 48S81 123 81 94z" fill="#dca681"/><path d="M79 73c-6-34 10-60 42-60 29 0 45 19 41 54l-9-13-8 3c-18 7-36 7-54 0l-8 16z" fill="#302923"/><path d="M83 52c7-24 24-35 41-35 17 0 32 8 39 27-11-11-24-15-39-13-15 2-27 11-41 21z" fill="#46372d"/><path d="M92 83h14M134 83h14" stroke="#382921" stroke-width="4" stroke-linecap="round"/><path d="M99 91h2M139 91h2" stroke="#302923" stroke-width="3" stroke-linecap="round"/><path d="M116 92c-1 9-4 15-3 18 3 2 8 2 11 0" fill="none" stroke="#a96f55" stroke-width="2" stroke-linecap="round"/><path d="M108 120c7 4 17 4 24 0" fill="none" stroke="#814d43" stroke-width="2" stroke-linecap="round"/><path d="M28 220c8-34 21-55 43-68l19 68M212 220c-8-34-21-55-43-68l-19 68" fill="#ffffff" fill-opacity=".12"/><path d="M118 160v60" stroke="#ffffff" stroke-opacity=".3" stroke-width="3"/><path d="M55 201h14M171 201h14" stroke="#ffffff" stroke-opacity=".3" stroke-width="3"/></svg></div><div class="card-name">${player.name}</div><div class="card-stats">${stats}</div></div></article>`;
}

function renderManagers() {
  $("#manager-strip").innerHTML = managers.map((manager, index) => `<article class="manager-card${turn === index ? " is-turn" : ""}"><div><div class="manager-name">${manager.name}</div><div class="manager-role">المدرب ${index === 0 ? "الأول" : "الثاني"}</div></div><div class="manager-money">${formatMoney(manager.balance)}</div><div class="manager-roster"><b>${manager.roster.length}/11</b><span>لاعب</span></div></article>`).join("");
}

function renderSquads() {
  $("#squad-list").innerHTML = managers.map((manager) => {
    const rating = manager.roster.length ? Math.round(manager.roster.reduce((total, player) => total + player.overall, 0) / manager.roster.length) : "--";
    const slots = positions.map((position, index) => {
      const filled = manager.roster[index];
      const className = filled ? (filled.acquiredByAuction ? "filled auctioned" : "filled") : "";
      return `<span class="roster-slot ${className}" title="${filled ? filled.name : position.label}">${position.short}</span>`;
    }).join("");
    return `<div class="squad-manager"><div class="squad-manager-top"><strong>${manager.name}</strong><span class="squad-rating">AVG <b>${rating}</b></span></div><div class="roster-slots">${slots}</div></div>`;
  }).join("");
}

function calculateScore(manager) {
  const ratings = manager.roster.map((player) => player.overall).sort((a, b) => b - a);
  const average = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
  const topFive = ratings.slice(0, 5).reduce((sum, rating) => sum + rating, 0) / 5;
  const lowest = ratings[ratings.length - 1];
  return { total: average * 0.7 + topFive * 0.2 + lowest * 0.1, average, topFive, lowest };
}

function formationMarkup(manager) {
  const rows = [
    { className: "pitch-line-forward", players: [manager.roster[10]] },
    { className: "pitch-line-attack", players: [manager.roster[9], manager.roster[7], manager.roster[8]] },
    { className: "pitch-line-pivot", players: [manager.roster[6], manager.roster[5]] },
    { className: "pitch-line-defense", players: [manager.roster[4], manager.roster[2], manager.roster[1], manager.roster[3]] },
    { className: "pitch-line-keeper", players: [manager.roster[0]] }
  ];
  const lines = rows.map(({ className, players }) => {
    const playerMarkup = players.map((player) => {
      const kit = clubKits[player.club] || ["#416b50", "#243e34"];
      return `<div class="pitch-player"><span class="pitch-player-shirt" style="--kit-light:${kit[0]};--kit-dark:${kit[1]}">${player.overall}</span><span class="pitch-player-name">${player.name}</span><span class="pitch-player-position">${player.position}</span></div>`;
    }).join("");
    return `<div class="pitch-line ${className}">${playerMarkup}</div>`;
  }).join("");
  return `<div class="formation-pitch" aria-label="تشكيلة اللاعبين"><div class="pitch-markings" aria-hidden="true"><span class="pitch-box pitch-box-top"></span><span class="pitch-box pitch-box-bottom"></span></div>${lines}</div>`;
}

function showResults() {
  gameScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  const scores = managers.map(calculateScore);
  const winnerIndex = scores[0].total === scores[1].total ? null : scores[0].total > scores[1].total ? 0 : 1;
  $("#winner-title").textContent = winnerIndex === null ? "انتهت المواجهة بالتعادل" : `${managers[winnerIndex].name} يفوز بالكأس!`;
  $(".result-subtitle").textContent = winnerIndex === null ? "تساوى الفريقان في النقاط." : "اكتملت التشكيلتان. وهذه نتيجة المواجهة.";
  $("#result-scoreboard").innerHTML = managers.map((manager, index) => {
    const score = scores[index];
    const winnerClass = index === winnerIndex ? " is-winner" : "";
    const ribbon = index === winnerIndex ? '<span class="winner-ribbon">بطل ديربي المزاد</span>' : "";
    return `<article class="result-team${winnerClass}">${ribbon}<h2>${manager.name}</h2><div class="result-big-score">${score.total.toFixed(1)}</div><p>التقييم العام <b>${score.average.toFixed(1)}</b> · الرصيد المتبقي <b>${formatMoney(manager.balance)}</b></p><div class="score-breakdown"><span>AVG <b>${score.average.toFixed(1)}</b></span><span>TOP 5 <b>${score.topFive.toFixed(1)}</b></span><span>LOW <b>${score.lowest}</b></span></div>${formationMarkup(manager)}</article>`;
  }).join('<div class="score-vs">VS</div>');
}

function formatMoney(amount) {
  return new Intl.NumberFormat("en-US").format(amount);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1900);
}

$("#sound-toggle").addEventListener("click", () => showToast("اللعبة تعمل بدون مؤثرات صوتية"));
