import React from 'react';

export const Pagination = ({ userPerPage, totalUser, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUser / userPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li className="page-item" key={number}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
