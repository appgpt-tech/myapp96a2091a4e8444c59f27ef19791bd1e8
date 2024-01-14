import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const TracksTitle = () => {
  const record = useRecordContext();
  return <span>Tracks {record ? `"${ record.Name }"` : ""}</span>;
};

export const TracksList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Name" />
<TextField source="Duration" />
<TextField source="Album" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const TracksEdit = () => (
                    <Edit title={<TracksTitle />}>
                      <SimpleForm>
                          <TextInput source="Name"   />
<TextInput source="Duration"   />
<TextInput source="Album"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const TracksCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Name"   />
<TextInput source="Duration"   />
<TextInput source="Album"   />
<NumberInput source="Id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


