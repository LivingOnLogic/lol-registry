# 🧾 lol-registry

**Living On Logic MCP Registry Explorer**  
A modular, verifiable, and developer-friendly interface to discover and interact with on-chain MCP servers powering agent-based applications.

---

## 🚀 What is `lol-registry`?

`lol-registry` is the official registry explorer of the **Living On Logic** protocol. It visualizes and interacts with modular servers (MCPs) — the building blocks of autonomous agents — making it easy for developers, curators, and users to:

- Explore registered MCPs across categories
- Verify module metadata and signatures
- Track uptime, trust scores, and usage
- Submit new MCP proposals
- Deprecate broken or malicious MCPs

---

## 🧠 Key Concepts

| Concept            | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| 🧱 MCP Modules      | Lightweight servers that expose standardized agent endpoints (REST, GraphQL, JSON-RPC, etc.) |
| 📦 Registry        | On-chain/off-chain index of MCP modules (stored as JSON + metadata)         |
| 🧠 Agents          | Logic scripts or contracts that call MCPs to perform complex tasks           |
| 🔐 Curation        | Reputation-based proposal and review system for what modules get listed     |

---

## ✨ Features

- ✅ On-chain + off-chain module browsing
- 🔍 Advanced search by type, tag, owner, or status
- 🔐 Signature validation (ED25519, EIP-712, etc.)
- 🌐 Integration with agent builders and MCP SDK
- 👥 Wallet login for submission & curation actions
- 🧠 Public Graph of tagged, trusted, and active modules

---

## 📸 Preview

![lol-registry preview](./public/preview.png)

---

## 📂 Project Structure

```
/components      → Reusable UI components  
/pages           → Next.js routes (e.g. /registry, /submit)  
/lib             → Registry fetchers, signature tools  
/styles          → Global Tailwind and custom CSS  
/public          → Icons, fonts, open graph images  
```

---

## 🛠️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/LivingOnLogic/lol-registry.git
cd lol-registry
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create `.env.local`:

```env
NEXT_PUBLIC_REGISTRY_URL=https://registry.livingonlogic.xyz
NEXT_PUBLIC_CHAIN_ID=1
```

### 4. Run development server
```bash
npm run dev
```

---

## 🧰 Technologies

- **Next.js** — full-stack framework
- **Tailwind CSS** — design system + utility classes
- **Wagmi / Viem** — EVM wallet toolkit
- **Ethers.js** — on-chain interactions
- **Living On Logic SDK** — agent-to-MCP tooling
- **IPFS / Arweave** — optional module metadata storage

---

## 📦 MCP Module Schema

Example module:

```json
{
  "name": "binance.mcp",
  "author": "0xabc...",
  "tags": ["price", "marketdata"],
  "endpoints": ["GET /price", "GET /ohlcv"],
  "registrySig": "0x123...",
  "trust": 91,
  "status": "active"
}
```

---

## 🧪 Development Tips

- Use `lib/mockRegistry.ts` for local testing
- New MCPs can be mocked in `public/modules/*.json`
- Add icons in `components/icons/` based on category
- Enable dev wallet overlay via `NEXT_PUBLIC_DEV=true`

---

## 🧠 Registry Architecture

```mermaid
graph TD;
  A[UI (lol-registry)] --> B[Registry SDK]
  B --> C[MCP Server Ping / Status]
  B --> D[Metadata + Trust Scores]
  B --> E[On-Chain Proposals / Votes]
```

---

## 🛡️ License

MIT License  
© 2024 Living On Logic contributors.  
Feel free to fork, extend, and remix for other agent ecosystems.

---

## 🤝 Contributing

We welcome PRs, issues, and discussions!

- 📄 Open a [Discussion](https://github.com/LivingOnLogic/lol-registry/discussions)
- 🛠 Submit a PR with a new MCP module renderer
- 💡 Suggest UI/UX improvements or validator plugins

---

## 📣 Credits

Built with ❤️ by the **Living On Logic** protocol team.  
Join us on [Telegram](https://t.me/livingonlogic), [GitHub](https://github.com/LivingOnLogic), and [GitBook](https://livingonlogic.gitbook.io) for more.
