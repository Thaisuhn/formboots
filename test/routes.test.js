let app = require("../app");
let chai = require("chai");
let chaiHttp = require('chai-http');
let {should} = chai;
should = should();
chai.use(chaiHttp);


describe('POST /first-form/', () => {
  it('Should have a status of 400', (done) => {
      chai.request(app).post('/first-form').end((err, res) => {
      // there should be no errors
      should.not.exist(err);
      // there should be a 400 status code
      res.status.should.equal(400);
      done();
    });
  });
  it("On submit form, should return 200 with all fields complete",(done)=>{
      chai.request(app).post('/first-form').type('form').send({
      'email': '123',
      'real_name': '123'
      }).end((err, res) => {
      // there should be no errors
      should.not.exist(err);
      // there should be a 200 status code
      res.status.should.equal(400);
      done();
      });
  });
  it("On submit form, should return 200 with all fields complete and correct format",(done)=>{
      chai.request(app).post('/first-form').type('form').send({
      'email': 'tester@example.com',
      'real_name': 'Hello'
    }).end((err, res) => {
      // there should be no errors
      should.not.exist(err);
      // there should be a 200 status code
      res.status.should.equal(200);
      done();
      });
  });
});


