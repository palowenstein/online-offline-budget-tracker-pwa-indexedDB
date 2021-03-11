  // export function useIndexedDb(Transaction, pending, method, object) {
  //   return new Promise((resolve, reject) => {

let db; // db variable
const request = indexedDB.open("budget", 1); // requesting a budget database

request.onupgradeneeded = function(e) {
  const db = e.target.result;
  db.createObjectStore("pending", { autoIncrement: true }); // pending object store + true autoIncrement
};

request.onerror = function(e) {
    console.log("There was an error: " + e.target.errorCode);
  };

request.onsuccess = function(e) {
  db = e.target.result;
  if (navigator.onLine) {checkDatabase();} // Application wake-up (nav online?), sends to database check fn.
};

function saveRecord(record) {
  const transaction = db.transaction(["pending"], "readwrite"); // pending db r/w access transaction init, attr. to const.
  const store = transaction.objectStore("pending"); // pending object store access
  store.add(record); // add method - record added to store
};

function checkDatabase() {
  const transaction = db.transaction(["pending"], "readwrite"); // pending db r/w access transaction init, attr. to const.
  const store = transaction.objectStore("pending");  // pending object store access
  const getAll = store.getAll(); // All store records attributed to const

  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(() => {
        const transaction = db.transaction(["pending"], "readwrite"); // pending db r/w access transaction init, attr. to const.
        const store = transaction.objectStore("pending");  // pending object store access
        store.clear(); // Store cleared of all items
      });
    }
  };
};

// }
// };

window.addEventListener("online", checkDatabase); // Event listener, accesses 'checkDatabase' fn when online access resumed.