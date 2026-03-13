// Copyright 2026 Skytale. Licensed under the Business Source License 1.1.
// See LICENSE for details.

import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { getChannels, createChannel, createInvite } from '../api.js';
import { formatDate, timeAgo, healthDotClass } from '../utils.js';
import '../styles/pages.css';

export default function Channels() {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inviteToken, setInviteToken] = useState(null);
  const [invitingChannel, setInvitingChannel] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState('');
  const [creating, setCreating] = useState(false);
  const [search, setSearch] = useState('');

  async function fetchChannels() {
    try {
      const data = await getChannels();
      setChannels(data?.channels || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchChannels();
  }, []);

  async function handleCreate(e) {
    e.preventDefault();
    if (!newName.trim()) return;
    setCreating(true);
    setError(null);
    try {
      await createChannel(newName.trim());
      setNewName('');
      setShowCreate(false);
      await fetchChannels();
    } catch (err) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  }

  const filteredChannels = channels.filter((ch) =>
    ch.name?.toLowerCase().includes(search.toLowerCase()),
  );

  async function handleInvite(channelName) {
    setInvitingChannel(channelName);
    setInviteToken(null);
    setError(null);
    try {
      const result = await createInvite(channelName);
      setInviteToken(result.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setInvitingChannel(null);
    }
  }

  if (loading)
    return (
      <div className="page">
        <p className="loading">Loading channels...</p>
      </div>
    );

  return (
    <main className="page" id="main-content">
      <div className="keys-header">
        <div className="keys-header-left">
          <h1>Channels</h1>
          <p>Your encrypted channels and shared context.</p>
        </div>
        {!showCreate && (
          <button className="btn-primary" onClick={() => setShowCreate(true)}>
            Create Channel
          </button>
        )}
      </div>

      {showCreate && (
        <form className="agent-register-form card" onSubmit={handleCreate}>
          <div className="agent-form-row">
            <label htmlFor="channel-name" className="visually-hidden">
              Channel name
            </label>
            <input
              id="channel-name"
              className="input"
              placeholder="org/namespace/service"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              required
            />
          </div>
          <div className="agent-form-actions">
            <button type="submit" className="btn-primary" disabled={creating}>
              {creating ? 'Creating...' : 'Create'}
            </button>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => {
                setShowCreate(false);
                setNewName('');
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="filter-bar">
        <label htmlFor="filter-channel" className="visually-hidden">
          Search channels
        </label>
        <input
          id="filter-channel"
          className="input"
          placeholder="Search channels..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {inviteToken && (
        <div className="new-key-banner">
          <p>Copy this invite token. It expires in 1 hour.</p>
          <div className="new-key-row">
            <code>{inviteToken}</code>
            <button
              className="btn-copy"
              aria-label="Copy to clipboard"
              onClick={() => {
                navigator.clipboard.writeText(inviteToken);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="error-msg">
          <p>{error}</p>
          <button className="btn-ghost" onClick={fetchChannels}>
            Retry
          </button>
        </div>
      )}

      <div className="key-list">
        {filteredChannels.length === 0 ? (
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)' }}>
              {channels.length === 0
                ? 'No channels yet. Create your first encrypted channel.'
                : 'No channels match your search.'}
            </p>
          </div>
        ) : (
          filteredChannels.map((ch) => (
            <div key={ch.id} className="card key-item">
              <div className="key-info">
                <span className="key-name">
                  <span
                    className={`health-dot ${healthDotClass(ch.last_message_at)}`}
                    role="status"
                    aria-label={
                      healthDotClass(ch.last_message_at) === 'green'
                        ? 'Active'
                        : healthDotClass(ch.last_message_at) === 'amber'
                          ? 'Idle'
                          : 'Inactive'
                    }
                  />{' '}
                  <Link
                    to={`/channels/${ch.id}`}
                    style={{ color: 'var(--text)', textDecoration: 'none' }}
                  >
                    {ch.name}
                  </Link>
                </span>
                <span className="key-prefix">
                  {ch.member_count != null && (
                    <span
                      className="badge"
                      style={{
                        fontSize: '0.6875rem',
                        padding: '0.125rem 0.5rem',
                        marginRight: '0.5rem',
                      }}
                    >
                      {ch.member_count} member{ch.member_count !== 1 ? 's' : ''}
                    </span>
                  )}
                  {ch.last_message_at && <span>Last active {timeAgo(ch.last_message_at)}</span>}
                </span>
                {ch.created_at && (
                  <span className="key-created">Created {formatDate(ch.created_at)}</span>
                )}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Link
                  to={`/channels/${ch.id}`}
                  className="btn-ghost"
                  style={{ padding: '0.4rem 1rem', fontSize: '0.8125rem' }}
                >
                  View
                </Link>
                <button
                  className="btn-ghost"
                  onClick={() => handleInvite(ch.name)}
                  disabled={invitingChannel === ch.name}
                >
                  {invitingChannel === ch.name ? 'Creating...' : 'Invite'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
