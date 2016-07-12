describe('It validates an email address', function () {
  it('should distinguish between valid and invalid email', function () {
    var cases = [{
      email: 'keith@rollingstones.com',
      valid: true
    },{
      email: 'mick@rs.co',
      valid: true
    },{
      email: 'mick@rs.c',
      valid: false
    },{
      email: 'mick#@rs.co',
      valid: false
    },{
      email: 'mickrs.c',
      valid: false
    }];

    for (i=0; i < cases.length; i++) {
      expect( emailValidator(cases[i].email) ).toEqual( cases[i].valid );
    }
  });
});
