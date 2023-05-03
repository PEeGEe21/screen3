import { useState, useEffect, useRef } from 'react';
import { colors } from '../../../utils/data';

export default function TagsInput() {
  const [tags, setTags] = useState([]);
  const [active, setActive] = useState(false);
  const [labelActive, setLabelActive] = useState(false);
  const tagInputRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (tagInputRef.current && !tagInputRef.current.contains(e.target)) {
        setActive(false);
        if (tags.length === 0 && tagInputRef.current.value === '') {
          setLabelActive(false);
        }
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [tags]);

  const handleFocus = () => {
    setActive(true);
    setLabelActive(true);
  };

  const handleBlur = (e) => {
    setActive(false);
    if (tagInputRef.current.value === '' && tags.length === 0) {
      setLabelActive(false);
    }
    if (e.target.value.trim() !== '' && !e.target.value.match(/^\s+$/gi)) {
      setTags([...tags, e.target.value.trim()]);
      tagInputRef.current.value = '';
    }
  };

  const handleKeyDown = (e) => {
    if (
      (e.keyCode === 32 ||
        e.keyCode === 13 ||
        e.target.value.slice(-1) === ' ') &&
      !e.target.value.match(/^\s+$/gi) &&
      e.target.value.trim() !== ''
    ) {
      setTags([...tags, e.target.value.trim()]);
      tagInputRef.current.value = '';
    }
    if (e.keyCode === 8 && e.target.value === '') {
      setTags((prevTags) => prevTags.slice(0, -1));
    }
  };

  const handleTagDelete = (index) => {
    setTags((prevTags) => prevTags.filter((_, tagIndex) => tagIndex !== index));
  };

  return (
    <div className="mb-4">
      <label
        className="text-[#807F88] font-medium mb-3 text-sm"
        htmlFor="tag-input"
      >
        Add Tags
      </label>
      <div
        className="tags-input tag-area border border-[#D5D5D6] rounded-lg mt-2"
        ref={tagInputRef}
      >
        <ul>
          {tags.map((tag, index) => (
            <li
              key={index}
              className="tag rounded-xl text-xs p-3 px-4 relative"
              style={{
                color: colors[index % colors.length],
                backgroundColor: `rgba(${parseInt(
                  colors[index % colors.length].substr(1, 2),
                  16
                )}, ${parseInt(
                  colors[index % colors.length].substr(3, 2),
                  16
                )}, ${parseInt(
                  colors[index % colors.length].substr(5, 2),
                  16
                )}, 0.1)`,
              }}
            >
              {tag}
              <span
                className="cross"
                onClick={() => handleTagDelete(index)}
                role="button"
                tabIndex={0}
              >
                <svg
                  className="h-3 w-3 "
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </li>
          ))}
          <li className={`tag ${active ? 'active' : ''}`}>
            {/* <input
              type="text"
              className="tag-input"
              id="tag-input"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            /> */}
            <input
              type="text"
              className={`tag-input  w-full px-4 py-2 text-gray-700 bg-white border border-[#D5D5D6]  focus:outline-none focus:border-0 text-sm`}
              name="tags"
              autoComplete="off"
              id="tag-input"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
