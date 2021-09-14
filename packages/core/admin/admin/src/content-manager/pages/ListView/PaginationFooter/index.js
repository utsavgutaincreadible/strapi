import React from 'react';
import PropTypes from 'prop-types';
import { Box, Row } from '@strapi/parts';
import { Pagination, PageSize } from '@strapi/helper-plugin';

const PaginationFooter = ({ pagination }) => {
  return (
    <Box paddingTop={6}>
      <Row alignItems="flex-end" justifyContent="space-between">
        <PageSize trackedEvent="willChangeNumberOfEntriesPerPage" />
        <Pagination pagination={pagination} />
      </Row>
    </Box>
  );
};

PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 10,
    total: 0,
  },
};

PaginationFooter.propTypes = {
  pagination: PropTypes.shape({
    page: PropTypes.number,
    pageCount: PropTypes.number,
    pageSize: PropTypes.number,
    total: PropTypes.number,
  }),
};

export default PaginationFooter;
