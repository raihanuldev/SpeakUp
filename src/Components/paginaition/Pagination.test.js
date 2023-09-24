import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  test("handles the 'Previous' button correctly", () => {
    // Create a mock function for onPageChange
    const onPageChangeMock = jest.fn();

    render(
      <Pagination
        currentPage={2}
        totalPages={12}
        onPageChange={onPageChangeMock}
        onNumberClick={() => {}}
      />
    );

    const previousButton = screen.getByText('Pre');
    fireEvent.click(previousButton);

    // Check if onPageChangeMock was called
    expect(onPageChangeMock).toHaveBeenCalled();

    // Check if onPageChangeMock was called with the correct argument
    expect(onPageChangeMock).toHaveBeenCalledWith(1);
  });
  test("handles the 'Next' button correctly", () => {
    // Create a mock function for onPageChange
    const onPageChangeMock = jest.fn();

    render(
      <Pagination
        currentPage={1}
        totalPages={12}
        onPageChange={onPageChangeMock}
        onNumberClick={() => {}}
      />
    );

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    // Check if onPageChangeMock was called
    expect(onPageChangeMock).toHaveBeenCalled();

    // Check if onPageChangeMock was called with the correct argument
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });
});
