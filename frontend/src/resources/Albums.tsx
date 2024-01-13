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
const AlbumsTitle = () => {
  const record = useRecordContext();
  return <span>Albums {record ? `"${ record.Albumname }"` : ""}</span>;
};

export const AlbumsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Albumname" />
<TextField source="Numberoftracks" />
<TextField source="Totalduration" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const AlbumsEdit = () => (
                    <Edit title={<AlbumsTitle />}>
                      <SimpleForm>
                          <TextInput source="Albumname"   />
<TextInput source="Numberoftracks"   />
<TextInput source="Totalduration"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const AlbumsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Albumname"   />
<TextInput source="Numberoftracks"   />
<TextInput source="Totalduration"   />
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


