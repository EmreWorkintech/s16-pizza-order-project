/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {name: "Emre Şahiner", email: 'emre@wit.com.tr', password:'1234', role_id:1},  //TO_DO: password hash sonrası güncelle
    {name: "Erdem Günay", email: 'erdem@wit.com.tr', password:'1234', role_id:2}
  ]);
};
