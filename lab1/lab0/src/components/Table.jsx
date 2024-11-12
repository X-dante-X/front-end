import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from './Accordion';

function Table({ data }) {
  const [sortConfig, setSortConfig] = useState(null);

  const headers = [
    { key: 'user', label: 'User Username' },
    { key: 'post', label: 'Post Title' },
    { key: 'comments', label: 'Comments Count' }
  ];

  const sortedData = [...data];
  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      const aKey = sortConfig.key === 'user' ? a.user.name : sortConfig.key === 'comments' ? a.comments.length : a.post.title;
      const bKey = sortConfig.key === 'user' ? b.user.name : sortConfig.key === 'comments' ? b.comments.length : b.post.title;
      if (aKey < bKey) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aKey > bKey) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="table-responsive" style={{ maxHeight: '600px', overflowY: 'scroll' }}>
      <table className="table table-bordered table-striped">
        <thead className="table-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
          <tr>
            {headers.map((header) => (
              <th
                key={header.key}
                className="text-center"
                style={{ cursor: 'pointer' }}
                onClick={() => handleSort(header.key)}
              >
                {header.label}{' '}
                {sortConfig?.key === header.key
                  ? sortConfig.direction === 'asc'
                    ? '▲'
                    : '▼'
                  : '⯁'}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <Row key={index} data={item} headers={headers} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Row({ data, headers }) {
  return (
    <tr>
      {headers.map((header) => (
        <td key={header.key} className="text-black">
          {header.key === 'user' ? (
            <Link to={`/lab5/users/${data.user.id}`}>{data.user.name}</Link>
          ) : header.key === 'post' ? (
            <Accordion title={data.post.title} body={data.post.body} />
          ) : header.key === 'comments' ? (
            <Link to={`/lab5/posts/${data.post.id}/comments`}>
              {data.comments.length} Comments
            </Link>
          ) : (
            renderCellContent(data[header.key])
          )}
        </td>
      ))}
    </tr>
  );
}

function renderCellContent(value) {
  if (Array.isArray(value)) {
    return value.join(', ');
  }
  if (typeof value === 'string' || typeof value === 'number') {
    return value;
  }
  return JSON.stringify(value);
}

export default Table;