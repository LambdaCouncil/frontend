// Titles and button texts for each corresponding application section's actionsheets
export const buttonsObj = {
  agendas: {
    // See Zeplin: 05 Agendas - 2
    primary: {
      title: 'New Agenda',
      buttons: ['Extended', 'Light', 'Cancel'],
      cancelIndex: 2,
      iconName: 'add'
    },
    // See Zeplin: 05 Agendas - 10
    secondary: {
      title: 'Agenda',
      buttons: ['Start Discussion', 'Make Assignmet', 'Cancel'],
      cancelIndex: 2,
      iconName: 'more'
    },
    // See Zeplin: 05 Agendas - 11
    tertiary: {
      title: 'Agenda',
      buttons: ['Edit', 'Delete', 'Cancel'],
      cancelIndex: 2,
      iconName: 'more'
    }
  },
  assignment: {
    // See Zeplin: 07 Assignments - 10
    primary: {
      title: 'Assignment',
      buttons: ['Edit', 'Delete', 'Cancel'],
      cancelIndex: 2,
      iconName: 'more'
    }
  },
  discussions: {
    // See Zeplin: 06 Discussions - 2
    primary: {
      title: 'New Discussion',
      buttons: ['Council', 'Private', 'Cancel'],
      cancelIndex: 2,
      iconName: 'add'
    },
    // See Zeplin: 06 Discussions - 8
    public: {
      title: 'Discussion',
      buttons: ['Leave', 'Delete', 'Cancel'],
      cancelIndex: 2,
      iconName: 'more'
    },
    // See Zeplin: 06 Discussions - 14
    private: {
      title: 'Discussion',
      buttons: ['Delete', 'Cancel'],
      cancelIndex: 1,
      iconName: 'more'
    }
  },
  files: {
    // See Zeplin: 08 Files - 3
    primary: {
      title: 'Upload file(s) less than 10mb each',
      buttons: ['Take Photo', 'Choose from Library', 'Browse Files', 'Cancel'],
      cancelIndex: 3,
      iconName: 'add'
    },
    // See Zeplin: 08 Files - 11
    secondary: {
      title: 'File',
      buttons: ['Share', 'Delete', 'Cancel'],
      cancelIndex: 2,
      iconName: 'more'
    }
  },
  promptings: {
    // See Zeplin: 09 Promptings - 6
    primary: {
      title: 'Prompting',
      buttons: ['Edit', 'Delete', 'Cancel'],
      cancelIndex: 2,
      iconName: 'more'
    }
  }
}
