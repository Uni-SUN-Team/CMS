'use strict';

/**
 * gather service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gather.gather');
