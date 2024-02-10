// Structural Design Patterns
// These patterns are concerned with class and object composition.
// They help structure or restructure one or more parts without affecting the entire system.
// In other words, they help obtain new functionalities without tampering with the existing ones.

// Façade Pattern //
// This is a structural design pattern that is widely used in the JavaScript libraries.It is used to provide a unified and simpler,
// public - facing interface for ease of use that shields away from the complexities of its consisting subsystems or subclasses.
let currentId = 0;
class complaintRegistry {
  registerComplaint(customer, type, details) {
    const id = complaintRegistry._uniqueIDGenerator();
    let register;
    if (type == "service") register = new ServiceComplaints();
    else if (type == "product") register = new ProductComplaints();
    return register.addComplaint({ id, customer, details });
  }

  static _uniqueIDGenerator() {
    return ++currentId;
  }
}

class Compalints {
  constructor() {
    this.complaints = [];
  }

  addComplaint = (complaint) => {
    this.complaints.push(complaint);
    console.log(this.replyMessage(complaint));
  };

  getComplaint(id) {
    return this.complaints.find((comp) => comp.id === id);
  }

  replyMessage(complaint) {}
}

class ProductComplaints extends Compalints {
  constructor() {
    super();
    if (ProductComplaints.exists) return ProductComplaints.instance;

    ProductComplaints.exists = true;
    ProductComplaints.instance = this;
    return this;
  }

  replyMessage({ id, customer, details }) {
    return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed with the Products Complaint Department`;
  }
}

class ServiceComplaints extends Compalints {
  constructor() {
    super();
    if (ServiceComplaints.exists) return ServiceComplaints.instance;

    ServiceComplaints.exists = true;
    ServiceComplaints.instance = this;
    return this;
  }

  replyMessage({ id, customer, details }) {
    return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed with the Service Complaint Department`;
  }
}

const registry = new complaintRegistry();

const reportService = registry.registerComplaint(
  "Nischith",
  "service",
  "service is not good"
);
const reportProd = registry.registerComplaint(
  "Nikhitha",
  "product",
  "poor product"
);
