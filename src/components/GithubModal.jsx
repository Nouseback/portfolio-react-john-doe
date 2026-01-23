import "../styles/GithubModal.css";

function GithubModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="github-modal-overlay">
      <div className="github-modal">

        {/* HEADER */}
        <div className="github-modal-header">
          <h3>Mon profil GitHub</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* BODY */}
        <div className="github-modal-body">
          {/* AVATAR */}
          <div className="github-avatar">
            <img
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              alt="Avatar GitHub"
            />
          </div>

          {/* INFOS */}
          <div className="github-infos">
            <p className="github-name">John Doe</p>

            <p className="github-bio">
              As we all know, John Doe's identity is unknown.
              I just wanted to contribute without being known.
            </p>

            <ul>
              <li><strong>Repositories :</strong> 1</li>
              <li><strong>Followers :</strong> 16</li>
              <li><strong>Following :</strong> 0</li>
            </ul>
          </div>
        </div>

        {/* FOOTER */}
        <div className="github-modal-footer">
          <button className="close-footer-btn" onClick={onClose}>
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
}

export default GithubModal;