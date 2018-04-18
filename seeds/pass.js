
exports.seed = function(knex, Promise) {
  
  return knex.raw('DELETE FROM "pass"; ALTER SEQUENCE pass_id_seq RESTART WITH 4;')
    .then(function () {
      let passes = [{
        id: 1,
        name: 'Loveland Pass',
        elevation: 11991,
        county: 'Summit',
        openInWinter: 'true'
      },{
        id: 2,
        name: 'Independence Pass',
        elevation: 12096,
        county: 'Pitkin',
        openInWinter: 'false'
      },{
        id: 3,
        name: 'Monarch Pass',
        elevation: 11312,
        county: 'Chaffee',
        openInWinter: 'false'
      }]
    
      
      return knex('pass').insert(passes);
    });
};
