import React, { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    const capitalizedTitle = title;
    const prevTitle = document.title;
    document.title = `${capitalizedTitle} - Hayyan Ali`;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default useTitle;