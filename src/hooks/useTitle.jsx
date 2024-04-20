import React, { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    const capitalizedTitle = title.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
    const prevTitle = document.title;
    document.title = `${capitalizedTitle} - Hayyan Ali`;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default useTitle;