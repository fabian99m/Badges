import React, { useMemo, useState } from "react";

import "./styles/BadgesList.css";

import Gravatar from "./Gravatar";

function useSearchBadget(badges) {
  const [query, setQuery] = useState("");
  const [filteredBadges, setfilteredBadges] = useState(badges);

  useMemo(() => {
    const res = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query);
    });
    setfilteredBadges(res);
  }, [query, badges]);

  return [query, setQuery, filteredBadges];
}

function BadgesList(props) {
  
  const [query, setQuery, filteredBadges] = useSearchBadget(props.badges);

  return (
    <React.Fragment>
      <div className="search_form">
        <label className="form_label">Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {filteredBadges.length ? (
        <ul>
          {filteredBadges.map((badge) => (
            <li onClick={() => props.click(badge)} key={badge.id}>
              <div id="img">
                <Gravatar email={badge.email} />
              </div>

              <div id="text">
                <p id="badge_name">
                  {badge.firstName} {badge.lastName}
                </p>
                <div id="twitter-esp">
                  <i className="bi bi-twitter"></i>
                  <p>@{badge.twitter}</p>
                </div>
                <p>{badge.jobTitle}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div id="badge_info">
          <h1>Not Badges were found..</h1>
        </div>
      )}
    </React.Fragment>
  );
}

export default BadgesList;
