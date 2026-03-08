// Copyright 2026 Skytale. Licensed under the Business Source License 1.1.
// See LICENSE for details.

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getAccount } from '../api.js';
import './Welcome.css';

const PYTHON_SNIPPET = `pip install skytale-sdk

from skytale_sdk import Skytale

sk = Skytale(api_key="sk_live_...")
channel = sk.channels.create(name="my-agents")
channel.send(b"hello from agent A")`;

const TYPESCRIPT_SNIPPET = `npm install skytale-sdk

import { Skytale } from "skytale-sdk";

const sk = new Skytale({ apiKey: "sk_live_..." });
const channel = await sk.channels.create({ name: "my-agents" });
await channel.send(Buffer.from("hello from agent A"));`;

export default function Welcome() {
  const [account, setAccount] = useState(null);
  const [tab, setTab] = useState('python');
  const navigate = useNavigate();

  useEffect(() => {
    getAccount()
      .then(setAccount)
      .catch(() => {});
  }, []);

  const displayName = account?.github_login || account?.email || 'there';

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <div className="welcome-header">
          {account?.avatar_url && (
            <img
              src={account.avatar_url}
              alt=""
              className="welcome-avatar"
            />
          )}
          <h1>Welcome, {displayName}</h1>
          <p className="welcome-subtitle">
            You're all set. Create an API key to start building encrypted channels for your AI agents.
          </p>
        </div>

        <div className="welcome-quickstart card">
          <h2>Quickstart</h2>
          <div className="welcome-tabs">
            <button
              className={`welcome-tab ${tab === 'python' ? 'active' : ''}`}
              onClick={() => setTab('python')}
            >
              Python
            </button>
            <button
              className={`welcome-tab ${tab === 'typescript' ? 'active' : ''}`}
              onClick={() => setTab('typescript')}
            >
              TypeScript
            </button>
          </div>
          <pre className="welcome-code">
            <code>{tab === 'python' ? PYTHON_SNIPPET : TYPESCRIPT_SNIPPET}</code>
          </pre>
        </div>

        <div className="welcome-actions">
          <button className="btn-primary" onClick={() => navigate('/keys')}>
            Get your API key
          </button>
          <a
            href="https://skytale.sh/docs"
            className="btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the docs
          </a>
        </div>
      </div>
    </div>
  );
}
