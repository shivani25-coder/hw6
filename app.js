const app = Vue.createApp({
    data() {
      return {
        showDetails: false,
        edit: false,
        message: 'My Contacts',
        contacts: [
          {
            name: 'John Kim',
            email: 'john.kim@example.com',
            age: 28,
            link: 'https://www.linkedin.com/in/johnkim/',
          },
          {
            name: 'Sarah Lee',
            email: 'sarah.lee@example.com',
            age: 32,
            link: 'https://www.linkedin.com/in/sarahlee/',
          },
          {
            name: 'Michael Park',
            email: 'michael.park@example.com',
            age: 25,
            link: 'https://www.linkedin.com/in/michaelpark/',
          },
          {
            name: 'Emily Smith',
            email: 'emily.smith@example.com',
            age: 35,
            link: 'https://www.linkedin.com/in/emilysmith/',
          },
          {
            name: 'Daniel Johnson',
            email: 'daniel.johnson@example.com',
            age: 40,
            link: 'https://www.linkedin.com/in/danieljohnson/',
          },
        ],
      };
    },
    methods: {
      toggleDetails() {
        this.showDetails = !this.showDetails;
      },
      toggleEdit() {
        this.edit = !this.edit;
      },
      increaseAge(contact) {
        contact.age++;
      },
    },
  });
  
  app.mount('#app');
  