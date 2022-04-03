'use strict';

/**
 * support-status service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::support-status.support-status');
