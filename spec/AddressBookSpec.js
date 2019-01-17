describe("Addres Book", funcion(){
  it("debo añadir un contacto",function(){
    var addressBook = new AddressBook(),
        thisContact = new Contact();
    addressBook.addContact(thisContact);
    expect(addressBook.getContact(0)).toBe(thisContact);
  });
});
