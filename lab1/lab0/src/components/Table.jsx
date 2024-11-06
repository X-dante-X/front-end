import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Accordion from './Accordion'; 

function Table({ data }) {
  const [sortConfig, setSortConfig] = useState(null);

  const headers = useMemo(() => {
    if (data.length === 0) return [];
    return Object.keys(data[0]).map(key => ({
      key,
      label: key.charAt(0).toUpperCase() + key.slice(1),
    }));
  }, [data]);

  const sortedData = [...data];
  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
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
        <thead className="table-light">
          <tr>
            {headers.map(header => (
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
      {headers.map(header => (
        <td key={header.key} className="text-black">
          {header.key === 'user' ? (
            <Link to={`/lab5/users/${data.userId}`}>{data.user}</Link>
          ) : header.key === 'post' ? (
            <Accordion title={data.post.title} body={data.post.body} />
          ) : header.key === 'comments' ? (
            <Link to={`/lab5/posts/${data.postId}/comments`}>
              {data.comments} Comments
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
